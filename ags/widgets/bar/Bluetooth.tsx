import { Gtk } from "ags/gtk4"
import AstalBluetooth from "gi://AstalBluetooth?version=0.1"
import { createBinding } from "gnim"

export const Bluetooth = () => {
  const bluetooth = AstalBluetooth.get_default()

  return <revealer
    transitionType={Gtk.RevealerTransitionType.SLIDE_LEFT}
    revealChild={createBinding(bluetooth, "is_connected")}>
    <label class="Bluetooth" label="󰂱" />
  </revealer>
}
