import React, { useEffect, useState } from 'react';
import { VideoPlayerProps } from './types';
import { useSdk } from '@thoughtindustries/hooks';
import { LoadingDots } from '@thoughtindustries/content';

declare global {
  interface Window {
    _wq: Array<Record<any, any>>;
  }
}

const SDK_URL = 'https://fast.wistia.com/assets/external/E-v1.js';
const PLAYER_ID_PREFIX = 'wistia-player-';

const VideoPlayer = (props: VideoPlayerProps): JSX.Element => {
  const { asset, playerColor, userId, doNotTrack } = props;
  const playerId = `${PLAYER_ID_PREFIX}${asset}`;
  const [player, setPlayer] = useState<Record<any, any>>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const status = useSdk(SDK_URL);

  useEffect(() => {
    if (status === 'ready') {
      window._wq = window._wq || [];
      window._wq.push({
        id: asset,
        options: {
          controlsVisibleOnLoad: true,
          videoFoam: true,
          playerColor,
          container: playerId,
          wmode: 'opaque',
          email: userId,
          doNotTrack: !!doNotTrack,
          volumeControl: true,
          plugin: {},
          fitStrategy: 'cover'
        },
        onReady: (player: any) => {
          setIsLoading(false);
          setPlayer(player);
        }
      });
    }
  }, [status, asset, playerColor, userId, doNotTrack, playerId]);

  useEffect(() => {
    const localStorageKey = `video-${asset}`;

    if (player) {
      const handleSecondChange = (seconds: string) => {
        if (parseInt(seconds) + 5 > player.duration()) {
          localStorage.removeItem(localStorageKey);
        } else {
          localStorage.setItem(localStorageKey, seconds);
        }
      };

      const savedTimestamp = localStorage.getItem(localStorageKey);
      if (savedTimestamp) {
        player.time(savedTimestamp);
      }

      player.bind('secondchange', handleSecondChange);
    }
  }, [player, asset]);

  const className = `wistia_embed wistia_async_${asset}`;

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-4/5 md:w-[850px] px-4">
        {isLoading && <LoadingDots />}
        <div id={playerId} key={asset} className={className} />
      </div>
    </div>
  );
};

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
