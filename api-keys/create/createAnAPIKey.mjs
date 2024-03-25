import {
  createApiKey,
  Privileges,
} from "@esri/arcgis-rest-developer-credentials"
import { ArcGISIdentityManager } from "@esri/arcgis-rest-request"

const authSession = await ArcGISIdentityManager.signIn({
  username: "<YOUR_USERNAME>",
  password: "<YOUR_PASSWORD>",
})

const newKey = await createApiKey({
  title: "DS2024 - Programmtic API Key",
  description: "API Key generated with ArcGIS REST JS",
  tags: ["developer", "summit", "2024", "API", "Key"],
  privileges: [Privileges.GeocodeTemporary, Privileges.Basemaps],
  authentication: authSession,
})

console.log(`${newKey.itemId} successfully created`)
