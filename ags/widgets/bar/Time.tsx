import Gtk from "gi://Gtk?version=4.0"
import { With } from "gnim"
import { currentTime, currentFormattedDate } from "../../common/vars"

const DateDisplay = () => {
  return (
    <menubutton class="DateDisplay">
      <box halign={Gtk.Align.CENTER}>
        <label
          $={(self) => (
            <With value={currentFormattedDate}>
              {(date) => {
                self.label = date
                return null
              }}
            </With>
          )}
        />
      </box>
      <popover>
        <Gtk.Calendar />
      </popover>
    </menubutton>
  )
}

const TimeDisplay = () => {
  return (
    <box class="TimeDisplay" halign={Gtk.Align.CENTER}>
      <label
        $={(self) => (
          <With value={currentTime}>
            {(time) => {
              self.label = time
              return null
            }}
          </With>
        )}
      />
    </box>
  )
}

export const DateTime = () => {
  return (
    <box
      class="DateTime"
      orientation={Gtk.Orientation.VERTICAL}
      halign={Gtk.Align.CENTER}
      valign={Gtk.Align.CENTER}
    >
      <box orientation={Gtk.Orientation.HORIZONTAL}>
        <DateDisplay />
        <label label=" | " css="font-family: 'JetBrainsMono Nerd Font'" />{" "}
        <TimeDisplay />
      </box>
    </box>
  )
}
