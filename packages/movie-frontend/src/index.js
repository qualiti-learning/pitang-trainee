import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Router from "./Router";

ReactDOM.render(
  <MantineProvider>
    <ColorSchemeProvider>
      <NotificationsProvider>
        <ModalsProvider>
          <Router />
        </ModalsProvider>
      </NotificationsProvider>
    </ColorSchemeProvider>
  </MantineProvider>,
  document.getElementById("root")
);
