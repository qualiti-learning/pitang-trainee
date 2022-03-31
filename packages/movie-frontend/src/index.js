import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import React from "react";
import ReactDOM from "react-dom";

import Router from "./Router";

ReactDOM.render(
  <MantineProvider>
    <ColorSchemeProvider>
      <NotificationsProvider>
        <Router />
      </NotificationsProvider>
    </ColorSchemeProvider>
  </MantineProvider>,
  document.getElementById("root")
);
