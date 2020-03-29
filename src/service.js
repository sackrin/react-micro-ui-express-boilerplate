import path from "path";
import { ExampleComponent } from "./Components";
import createExpress from '@sackrin/react-micro-ui/lib/createExpress';

// Retrieve the local config
const microUIConfig = require(path.join(process.cwd(), 'microui.config.js'));
// Create the Lambda
const { api, strap, boot } = createExpress({ profile: process.env.PROFILE || 'local', config: microUIConfig });
// Add custom routes here
api.get('/testing', async (req, res) => {
  res.json({ helloWorld: true });
});
// SERVER SIDE RENDERED COMPONENTS
// Strap in the front end components
strap('ExampleComponent', ExampleComponent);
// Boot and handle the response
boot();
