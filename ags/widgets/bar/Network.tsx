import AstalNetwork from "gi://AstalNetwork?version=0.1"
import { createBinding, With } from "gnim"
import { execAsync } from "ags/process"

export const Network = () => {
  const network = AstalNetwork.get_default()
  const primary = createBinding(network, "primary")

  const wifiSSID = createBinding(network.wifi, "ssid")

  return (
    <button
      class="network"
      onClicked={() => execAsync("bash -c 'kitty -e impala'")}
    >
      <box>
        <With value={primary}>
          {(primary) => {
            if (primary === AstalNetwork.Primary.WIFI) {
              return (
                <image
                  class="Icon"
                  tooltipText={`Wi-Fi: ${wifiSSID.get()}`}
                  iconName="network-wireless-signal-excellent-symbolic"
                />
              )
            } else if (primary === AstalNetwork.Primary.WIRED) {
              return (
                <image
                  class="Icon"
                  iconName={createBinding(network.wired, "iconName")}
                  tooltipText={`Wired Connection`}
                />
              )
            } else {
              return (
                <image
                  class="Icon Offline"
                  tooltipText="No Network Connection"
                  iconName="network-offline-symbolic"
                />
              )
            }
          }}
        </With>
      </box>
    </button>
  )
}
