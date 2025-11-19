import Gdk from "gi://Gdk?version=4.0"
import Astal from "gi://Astal?version=4.0"
import app from "ags/gtk4/app"
import { Accessor } from "gnim"
import { DateTime } from "./Time"
import { Workspaces } from "./WorkspacesButton"
import { SystemTrayToggle } from "../bar/SystemTrayToggle"
import { Media } from "./Media"
import { Bluetooth } from "./Bluetooth"
import { Network } from "./Network"
import { PowerOptions } from "./PowerOptions"

export const Bar = (monitor: Gdk.Monitor) => {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor

  return (
    <window
      name="Bar"
      namespace="bar"
      gdkmonitor={monitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      application={app}
      visible={true}
      layer={Astal.Layer.TOP}
      anchor={TOP | LEFT | RIGHT}
      class="bar"
    >
      <centerbox>
        <box $type="start" css="margin-left: 4px">
          <Workspaces />
          <box css="margin-left:10px"></box>
          <Media />
        </box>
        <box $type="center"></box>
        <box $type="end" css="margin-right: 10px">
          <box css="margin-right: 10px">
            <SystemTrayToggle />
          </box>
          <Bluetooth />
          <Network />
          <box css="margin-left: 10px">
            <DateTime />
          </box>
          <box css="margin-left: 10px">
            <PowerOptions />
          </box>
        </box>
      </centerbox>
    </window>
  )
}
