import AstalMpris from "gi://AstalMpris?version=0.1"
import Pango from "gi://Pango?version=1.0"
import { createBinding, With } from "gnim"

const getTitle = (player: AstalMpris.Player): string => {
  return player.artist
    ? `${player.artist}: ${player.title}`
    : player.album
    ? `${player.album}: ${player.title}`
    : `${player.title}`
}

export const Media = () => {
  const mpris = AstalMpris.get_default()

  return (
    <With value={createBinding(mpris, "players")}>
      {(ps: Array<AstalMpris.Player>) => {
        const spotify = ps.find((p) => p.identity === "Spotify")

        return spotify ? (
          <button class="media" onClicked={() => spotify.play_pause()}>
            <label
              class={createBinding(spotify, "playbackStatus").as((s) =>
                s > 0 ? "paused" : "playing"
              )}
              maxWidthChars={80}
              ellipsize={Pango.EllipsizeMode.END}
              label={createBinding(spotify, "metadata").as(() => {
                const title = getTitle(spotify)
                return title.length > 40 ? title.slice(0, 40) + "…" : title
              })}
            />
          </button>
        ) : (
          <box />
        )
      }}
    </With>
  )
}
