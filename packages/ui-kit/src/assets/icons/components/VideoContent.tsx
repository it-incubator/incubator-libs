import { IconWrapper, IconProps } from "../IconWrapper";

const VideoContent = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M4 22c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 012 20V10c0-.55.196-1.02.587-1.412A1.926 1.926 0 014 8h16c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v10c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0120 22H4zm0-2h16V10H4v10zm6-1l6-4-6-4v8zM4 7V5h16v2H4zm3-3V2h10v2H7z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default VideoContent;
