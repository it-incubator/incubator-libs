import { IconWrapper, IconProps } from "../IconWrapper";

const Roadmap = (allProps: IconProps) => {
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
            d="M9 21c-1.1 0-2.042-.392-2.825-1.175C5.392 19.042 5 18.1 5 17V8.825a3.09 3.09 0 01-1.438-1.087A2.852 2.852 0 013 6c0-.833.292-1.542.875-2.125A2.893 2.893 0 016 3c.833 0 1.542.292 2.125.875S9 5.167 9 6c0 .65-.188 1.23-.563 1.737A3.09 3.09 0 017 8.825V17c0 .55.196 1.02.588 1.413.391.391.862.587 1.412.587.55 0 1.02-.196 1.412-.587.392-.392.588-.863.588-1.413V7c0-1.1.392-2.042 1.175-2.825C12.958 3.392 13.9 3 15 3s2.042.392 2.825 1.175C18.608 4.958 19 5.9 19 7v8.175a3.09 3.09 0 011.438 1.087c.375.509.562 1.088.562 1.738 0 .833-.292 1.542-.875 2.125A2.893 2.893 0 0118 21a2.893 2.893 0 01-2.125-.875A2.893 2.893 0 0115 18c0-.65.188-1.233.563-1.75A2.91 2.91 0 0117 15.175V7c0-.55-.196-1.02-.587-1.412A1.926 1.926 0 0015 5c-.55 0-1.02.196-1.412.588A1.926 1.926 0 0013 7v10c0 1.1-.392 2.042-1.175 2.825C11.042 20.608 10.1 21 9 21zM6 7c.283 0 .52-.096.713-.287A.968.968 0 007 6a.968.968 0 00-.287-.713A.968.968 0 006 5a.968.968 0 00-.713.287A.968.968 0 005 6c0 .283.096.52.287.713.192.191.43.287.713.287zm12 12c.283 0 .52-.096.712-.288A.968.968 0 0019 18a.968.968 0 00-.288-.712A.968.968 0 0018 17a.968.968 0 00-.712.288A.968.968 0 0017 18c0 .283.096.52.288.712.191.192.429.288.712.288z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Roadmap;
