import AstalTray from "gi://AstalTray?version=0.1"
import Gtk from "gi://Gtk?version=4.0"
import { Accessor, createBinding, For } from "gnim"

const initTrayItemButton = (btn: Gtk.MenuButton, item: AstalTray.TrayItem) => {
  btn.menuModel = item.menuModel
  btn.insert_action_group("dbusmenu", item.actionGroup)
  item.connect("notify::action-group", () => {
    btn.insert_action_group("dbusmenu", item.actionGroup)
  })
}

const StateHolder = new Gtk.Label({ visible: false })
let systemTrayToggled = createBinding(StateHolder, "visible")

const handleToggle = () => {
  StateHolder.visible = !StateHolder.visible
}

export const SystemTrayToggle = () => {
  const tray = AstalTray.get_default()
  const items = createBinding(tray, "items")

  return (
    <box class="SystemTrayToggle">
      <button onClicked={() => handleToggle()}>
        <image iconName="pan-down-symbolic" />
      </button>

      <box visible={systemTrayToggled} class="TrayItemsContainer">
        <For each={items}>
          {(item) => (
            <menubutton
              class="TrayItem"
              $={(self) => initTrayItemButton(self, item)}
            >
              <image gicon={createBinding(item, "gicon")} />
            </menubutton>
          )}
        </For>
      </box>
    </box>
  )
}
