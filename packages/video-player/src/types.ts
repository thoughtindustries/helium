export interface VideoPlayerProps {
  /** ID of Wistia Asset to be embedded */
  asset: string;
  /** hex code of player color */
  playerColor: string;
  /** id of user to associate with view */
  userId?: string;
  /** controls whether the view is tracked */
  doNotTrack?: boolean;
}
