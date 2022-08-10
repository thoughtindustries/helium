import React from 'react';

const uploadStyle: React.CSSProperties = {
  position: 'absolute',
  top: '-30px',
  right: '-19px',
  width: '30px',
  height: '30px'
};

const arrowStyle: React.CSSProperties = {
  width: '30px',
  height: '30px',
  position: 'absolute',
  bottom: '-5px',
  left: '3px'
};

const HelpIconStyle: React.CSSProperties = {
  width: '30px',
  height: '30px',
  position: 'absolute',
  bottom: '25px'
};

const MoveIconStyle: React.CSSProperties = {
  width: '30px',
  height: '30px',
  bottom: '0px',
  cursor: 'grab'
};

export const UploadIcon = (): JSX.Element => (
  <i className="icon-upload" style={{ display: 'inline-block', position: 'relative' }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -20 150 50" style={uploadStyle}>
      <path
        style={{
          fill: '#311ac9',
          fillOpacity: 1,
          stroke: 'none'
        }}
        d="M 20.832031 70.351562 L 20.832031 55.765625 C 20.832031 53.464844 18.964844 51.601562 16.667969 51.601562 C 14.367188 51.601562 12.5 53.464844 12.5 55.765625 L 12.5 70.351562 C 12.5 74.953125 16.230469 78.683594 20.832031 78.683594 L 79.167969 78.683594 C 83.769531 78.683594 87.5 74.953125 87.5 70.351562 L 87.5 55.765625 C 87.5 53.464844 85.632812 51.601562 83.332031 51.601562 C 81.035156 51.601562 79.167969 53.464844 79.167969 55.765625 L 79.167969 70.351562 Z M 20.832031 70.351562 "
      />
      <path
        style={{
          stroke: 'none',
          fillRule: 'evenodd',
          fill: '#fff',
          fillOpacity: 1
        }}
        d="M20.832 70.352V55.766a4.166 4.166 0 0 0-8.332 0v14.586a8.332 8.332 0 0 0 8.332 8.332h58.336a8.332 8.332 0 0 0 8.332-8.332V55.766a4.166 4.166 0 0 0-8.332 0v14.586ZM61.277 34.07l-8.332-8.332a4.168 4.168 0 0 0-5.89 0l-8.332 8.332a4.168 4.168 0 0 0 0 5.89 4.161 4.161 0 0 0 5.89 0L50 34.575l5.387 5.387a4.161 4.161 0 0 0 5.89 0 4.168 4.168 0 0 0 0-5.89Zm0 0"
      />
      <path
        style={{
          stroke: 'none',
          fillRule: 'evenodd',
          fill: '#fff',
          fillOpacity: 1
        }}
        d="M45.832 30.766v29.168A4.17 4.17 0 0 0 50 64.102a4.17 4.17 0 0 0 4.168-4.168V30.766c0-2.301-1.867-4.164-4.168-4.164a4.166 4.166 0 0 0-4.168 4.164Zm0 0"
      />
    </svg>
  </i>
);

export const AlertIcon = () => (
  <i
    className="icon-alert"
    aria-label="alert"
    style={{ display: 'inline-block', position: 'relative' }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="30 -15 5 90" width={45} height={45}>
      <path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: '#311ac9',
          fillOpacity: 1
        }}
        d="m32 6.438-1.75 3L6.25 51l-1.688 3h54.876l-1.688-3-24-41.563Zm0 8L52.5 50h-41ZM30 28v12h4V28Zm0 14v4h4v-4Zm0 0"
      />
    </svg>
  </i>
);

export const RightArrowIcon = (): JSX.Element => (
  <i
    className="icon-right-arrow"
    style={{ display: 'inline-block', position: 'relative', marginRight: '2rem' }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="10 -20 40 55" style={arrowStyle}>
      <path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: '#311ac9',
          fillOpacity: 1
        }}
        d="M13.469 2.047 12.03 3.453 23.351 15l-11.32 11.555 1.438 1.39L26.149 15Zm0 0"
      />
    </svg>
  </i>
);

export const DownArrowIcon = (): JSX.Element => (
  <i
    className="icon-down-arrow"
    style={{ display: 'inline-block', position: 'relative', marginRight: '2rem' }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="10 -20 40 55" style={arrowStyle}>
      <path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: '#311ac9',
          fillOpacity: 1
        }}
        d="M3.453 8.031 2.047 9.47 15 22.149l12.945-12.68-1.39-1.438L15 19.351Zm0 0"
      />
    </svg>
  </i>
);
export const HelpIcon = (): JSX.Element => (
  <i
    className="icon-help"
    aria-label="upload"
    style={{ display: 'inline-block', position: 'relative', marginRight: '2rem' }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="10 -20 1 55" style={HelpIconStyle}>
      <path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: '#969797',
          fillOpacity: 1
        }}
        d="M15 2C7.836 2 2 7.836 2 15s5.836 13 13 13 13-5.836 13-13S22.164 2 15 2Zm0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S4 21.086 4 15 8.914 4 15 4Zm.117 4c-2.422.14-4.398 2.172-4.398 4.64h2c0-1.624 1.406-2.898 3.125-2.6 1.226.21 2.195 1.413 2.156 2.679-.031 1.11-.68 1.812-1.633 2.234-.594.266-1.156.516-1.633 1.016-.476.5-.734 1.242-.734 2.031h2c0-.453.063-.523.188-.656.117-.125.445-.32.984-.563 1.492-.648 2.773-2.078 2.828-4 .07-2.273-1.563-4.328-3.82-4.719A5.463 5.463 0 0 0 15.117 8ZM14 20v2h2v-2Zm0 0"
      />
    </svg>
  </i>
);

export const GrabIcon = (): JSX.Element => (
  <i className="icon-grab" style={{ display: 'inline-block', marginRight: '2rem' }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="60 -15 5 112" style={MoveIconStyle}>
      <path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: '#cbcbcb',
          fillOpacity: 1
        }}
        d="m32 5.172-9.414 9.414 2.828 2.828L30 12.828V24h4V12.828l4.586 4.586 2.828-2.828ZM14.586 22.586 5.172 32l9.414 9.414 2.828-2.828L12.828 34H26v-4H12.828l4.586-4.586Zm34.828 0-2.828 2.828L51.172 30H38v4h13.172l-4.586 4.586 2.828 2.828L58.828 32ZM30 38v13.172l-4.586-4.586-2.828 2.828L32 58.828l9.414-9.414-2.828-2.828L34 51.172V38Zm0 0"
      />
    </svg>
  </i>
);

export const EditIcon = (): JSX.Element => (
  <i className="icon-edit" style={{ display: 'inline-block', position: 'relative', top: '2px' }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width={16} height={16}>
      <path d="M20.094.25a2.247 2.247 0 0 0-1.625.656l-1 1.031 6.593 6.625 1-1.03a2.32 2.32 0 0 0 0-3.282L21.75.937A2.364 2.364 0 0 0 20.094.25Zm-3.75 2.594-1.563 1.5 6.875 6.875L23.25 9.75ZM13.78 5.438 2.97 16.155a.979.979 0 0 0-.5.625L.156 24.625a.98.98 0 0 0 .242.977.98.98 0 0 0 .977.242l7.844-2.313a.979.979 0 0 0 .781-.656l10.656-10.563-1.468-1.468L8.25 21.813l-4.406 1.28-.938-.937 1.344-4.593L15.094 6.75Zm2.375 2.406-10.968 11 1.593.343.219 1.47 11-10.97Z" />
    </svg>
  </i>
);

export const StopwatchIcon = (): JSX.Element => (
  <i
    className="icon-stopwatch"
    style={{ display: 'inline-block', position: 'relative', top: '2px' }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="fill-current"
      viewBox="0 -5 45 26"
      width={32}
      height={32}
    >
      <path d="M13 2a1 1 0 1 0 0 2h1v2.047C8.406 6.563 4 11.273 4 17c0 6.063 4.938 11 11 11 6.063 0 11-4.938 11-11 0-2.672-.96-5.125-2.555-7.031l2.266-2.266c.289-.281.375-.719.219-1.101a1.019 1.019 0 0 0-.953-.61c-.258.008-.5.117-.688.305l-2.258 2.258A10.97 10.97 0 0 0 16 6.047V4h1a1 1 0 1 0 0-2Zm2 6c4.984 0 9 4.016 9 9s-4.016 9-9 9-9-4.016-9-9 4.016-9 9-9Zm-.016 1.984A.997.997 0 0 0 14 11v6a1 1 0 1 0 2 0v-6a1.008 1.008 0 0 0-.29-.727 1.008 1.008 0 0 0-.726-.289Zm0 0" />
    </svg>
  </i>
);

export const ChatIcon = (): JSX.Element => (
  <i className="icon-chat" style={{ display: 'inline-block', position: 'relative', top: '2px' }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="fill-current"
      viewBox="0 0 48 48"
      width={32}
      height={32}
    >
      <path d="M10.5 7C6.928 7 4 9.928 4 13.5v17c0 3.572 2.928 6.5 6.5 6.5H12v5.5c0 1.966 2.427 3.179 4 2L26 37h11.5c3.572 0 6.5-2.928 6.5-6.5v-17C44 9.928 41.072 7 37.5 7h-27zm0 3h27c1.95 0 3.5 1.55 3.5 3.5v17c0 1.95-1.55 3.5-3.5 3.5h-12a1.5 1.5 0 0 0-.9.3L15 41.5v-6a1.5 1.5 0 0 0-1.5-1.5h-3C8.55 34 7 32.45 7 30.5v-17c0-1.95 1.55-3.5 3.5-3.5z" />
    </svg>
  </i>
);

export const ViewIcon = (): JSX.Element => (
  <i className="icon-view" style={{ display: 'inline-block', position: 'relative', top: '2px' }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="1 -15 150 70"
      width={32}
      height={32}
      className="fill-current"
    >
      <path d="M48 18C21.883 18 1.258 45.64.39 46.816a1.992 1.992 0 0 0 0 2.368C1.259 50.359 21.884 78 48 78s46.746-27.64 47.61-28.816c.519-.704.519-1.664 0-2.368C94.745 45.641 74.116 18 48 18Zm-.996 6.02A24.001 24.001 0 0 1 72 48c-.016 13.25-10.75 23.984-24 24-13.07.016-23.754-10.434-24.023-23.5-.27-13.07 9.964-23.953 23.027-24.48Zm-17.211 2.753a27.9 27.9 0 0 0-.02 42.438C17.09 62.75 7.47 51.633 4.54 48c2.93-3.637 12.55-14.77 25.254-21.227Zm36.434.016C78.91 33.25 88.53 44.367 91.46 48c-2.93 3.637-12.55 14.77-25.254 21.227a27.9 27.9 0 0 0 .02-42.438ZM48 32c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16a16.373 16.373 0 0 0-4.57-11.398l-2.86 2.796A12.538 12.538 0 0 1 60 48c0 6.629-5.371 12-12 12s-12-5.371-12-12 5.371-12 12-12Zm4 0v4h4v-4Zm0 0" />
    </svg>
  </i>
);

export const FileIcon = (): JSX.Element => (
  <i className="icon-file" style={{ display: 'inline-block', position: 'relative', top: '2px' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} className="fill-current">
      <path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fillOpacity: 1
        }}
        d="M12 6v52h40V19.2l-.602-.598-12-12L38.801 6Zm4 4h20v12h12v32H16Zm24 2.8 5.2 5.2H40ZM20 26v4h24v-4Zm0 10v4h14v-4Zm18 0v4h6v-4Zm-18 8v4h14v-4Zm18 0v4h6v-4Zm0 0"
      />
    </svg>
  </i>
);

export const TrashIcon = (): JSX.Element => (
  <i className="trash-file" style={{ display: 'inline-block', position: 'relative', top: '4px' }}>
    <svg viewBox="1 -15 20 46" xmlns="http://www.w3.org/2000/svg" width={32} height={32}>
      <path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: '#cbcbcb',
          fillOpacity: 1
        }}
        d="M12.992 2A3.008 3.008 0 0 0 10 4.992V6H4v2h2v17c0 1.648 1.352 3 3 3h12c1.648 0 3-1.352 3-3V8h2V6h-6V4.992A3.008 3.008 0 0 0 17.008 2Zm0 2h4.016c.562 0 .992.43.992.992V6h-6V4.992c0-.562.43-.992.992-.992ZM8 8h14v17c0 .563-.438 1-1 1H9c-.563 0-1-.438-1-1Zm2 2v14h2V10Zm4 0v14h2V10Zm4 0v14h2V10Zm0 0"
      />
    </svg>
  </i>
);

export const RepeatIcon = (): JSX.Element => (
  <i className="trash-repeat" style={{ display: 'inline-block', position: 'relative' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width={34} height={34} viewBox="-11 0 70 80">
      <path
        style={{
          fill: '#405667',
          fillOpacity: 1,
          stroke: 'none'
        }}
        d="M0 0h64v64H0z"
      />
      <path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: '#fff',
          fillOpacity: 1
        }}
        d="M8.145 19.715a13.326 13.326 0 0 0-4.243 2.86 13.276 13.276 0 0 0-2.855 4.238A13.25 13.25 0 0 0 0 32c0 1.797.352 3.543 1.047 5.188a13.276 13.276 0 0 0 2.855 4.238 13.352 13.352 0 0 0 4.239 2.86c.171.07.347.105.52.105.519 0 1.015-.305 1.226-.817a1.334 1.334 0 0 0-.707-1.746 10.657 10.657 0 0 1-3.395-2.285 10.749 10.749 0 0 1-2.285-3.39A10.623 10.623 0 0 1 2.668 32a10.59 10.59 0 0 1 3.121-7.543c.984-.98 2.125-1.75 3.39-2.285a10.575 10.575 0 0 1 4.153-.84h32.781l-5.722 5.723c-.52.52-.52 1.367 0 1.886a1.34 1.34 0 0 0 1.887.004l7.995-8a1.329 1.329 0 0 0 .293-1.453 1.27 1.27 0 0 0-.293-.433l-7.996-7.997a1.332 1.332 0 1 0-1.887 1.883l5.723 5.723H13.332c-1.797 0-3.547.352-5.187 1.047Zm0 0"
      />
      <path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: '#fff',
          fillOpacity: 1
        }}
        d="M60.098 22.574a13.352 13.352 0 0 0-4.239-2.86 1.33 1.33 0 0 0-1.746.712c-.285.68.032 1.46.707 1.746 1.27.535 2.41 1.305 3.395 2.285.976.98 1.746 2.121 2.285 3.39.555 1.317.832 2.712.832 4.153 0 1.441-.277 2.836-.836 4.152a10.683 10.683 0 0 1-2.285 3.391c-.98.98-2.121 1.75-3.39 2.285-1.317.559-2.716.84-4.153.84H17.887l5.722-5.723c.52-.52.52-1.367 0-1.886a1.337 1.337 0 0 0-1.886 0l-7.996 7.996a1.388 1.388 0 0 0-.293.437 1.309 1.309 0 0 0 0 1.016c.066.168.168.312.293.437l7.996 7.996a1.337 1.337 0 0 0 1.887.004c.519-.52.519-1.367 0-1.886l-5.723-5.727h32.781c1.797 0 3.547-.352 5.187-1.047a13.31 13.31 0 0 0 4.239-2.86 13.233 13.233 0 0 0 2.855-4.237C63.65 35.542 64 33.797 64 32a13.283 13.283 0 0 0-3.902-9.426Zm0 0"
      />
    </svg>
  </i>
);
