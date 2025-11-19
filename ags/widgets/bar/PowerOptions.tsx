import { Gtk } from "ags/gtk4"
import { execAsync } from "ags/process"

export const PowerOptions = () => {
  return (
    <menubutton class="power">
      <image iconName="system-shutdown" />
      <popover>
        <box orientation={Gtk.Orientation.VERTICAL}>
          <box class="power-option">
            <image iconName="system-lock-screen" />
            <button onClicked={() => execAsync("bash -c 'hyprlock'")}>
              Lock
            </button>
          </box>

          <box class="power-option">
            <image iconName="media-playback-pause" />
            <button onClicked={() => execAsync("bash -c 'systemctl suspend'")}>
              Suspend
            </button>
          </box>

          <box class="power-option">
            <image iconName="system-reboot" />
            <button onClicked={() => execAsync("bash -c 'systemctl reboot'")}>
              Reboot
            </button>
          </box>

          <box class="power-option">
            <image iconName="system-shutdown" />
            <button onClicked={() => execAsync("bash -c 'systemctl poweroff'")}>
              Shutdown
            </button>
          </box>
        </box>
      </popover>
    </menubutton>
  )
}
