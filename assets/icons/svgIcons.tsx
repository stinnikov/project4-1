import * as React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg"
const ProfileIcon = (props: SvgProps) => (
	<Svg
		width={30}
		height={30}
		fill="none"
		viewBox="0 0 30 30"
		{...props}
	>
		<Path
			fill={"none"}
			stroke={props.fill !== 'none' ? props.fill : 'black'}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M7.431 24.008a8.25 8.25 0 0 1 7.355-4.508 8.25 8.25 0 0 1 7.322 4.446m-4.572-10.994a2.881 2.881 0 1 1-5.762 0 2.881 2.881 0 0 1 5.762 0Zm-2.75 13.62C8.276 26.571 3 21.294 3 14.785 3 8.276 8.277 3 14.786 3 21.295 3 26.57 8.277 26.57 14.786c0 6.509-5.276 11.785-11.785 11.785Z"
		/>
	</Svg>
)

const CatalogIcon = (props: SvgProps) => (
	<Svg
		width={30}
		height={30}
		fill="none"
		viewBox="0 0 30 30"
		{...props}
	>
		<Path
			fill={props.fill ?? "none"}
			fillRule="evenodd"
			d="M13.961 2a10.962 10.962 0 1 0 6.786 19.572l4.71 4.71a1.29 1.29 0 0 0 1.824-1.824l-4.71-4.71A10.962 10.962 0 0 0 13.961 2ZM5.578 12.962a8.383 8.383 0 1 1 16.766 0 8.383 8.383 0 0 1-16.766 0Z"
			clipRule="evenodd"
		/>
	</Svg>
)

const FavoritesIcon = (props: SvgProps) => (
	<Svg
		width={30}
		height={30}
		fill="none"
		viewBox="0 0 30 30"
		{...props}
	>
		<Path
			fill={"none"}
			stroke={props.stroke ?? "#000"}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M14.335 25.708 4.89 15.692c-2.66-2.82-2.492-7.446.364-10.043 2.833-2.576 7.13-2.075 9.369 1.09l.376.533.376-.532c2.24-3.166 6.536-3.667 9.369-1.09 2.856 2.596 3.023 7.221.363 10.042l-9.443 10.016a.904.904 0 0 1-1.33 0Z"
		/>
	</Svg>
)

const ArrowRightIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<Path
			fill={props.fill ?? "none"}
			stroke={props.stroke ?? "#000"}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="m8 20 8-8-8-8"
		/>
	</Svg>
)

const SettingsIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<Path
		fill={props.fill ?? "none"}
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M20 7h-9M14 17H5M17 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
		/>
	</Svg>
)

const PickUpIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<Path fill={props.fill ?? '#000'} d="M11 13v2H9v-2h2Z" />
		<Path
			fill={props.fill ?? '#000'}
			fillRule="evenodd"
			d="M6.48 4a2 2 0 0 0-1.561.75l-3.05 3.813C1.083 9.545 1.783 11 3.04 11H4v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7h2v8a1 1 0 0 0 2 0v-8h.96c1.258 0 1.957-1.455 1.171-2.437l-3.05-3.812A2 2 0 0 0 17.52 4H6.48ZM8 11a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H8Z"
			clipRule="evenodd"
		/>
	</Svg>
)

const ClockIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		{...props}
	>
		<Path
			fill={props.fill ?? "#000"}
			d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 4a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1Z"
		/>
	</Svg>
)

const BasketIcon = (props: SvgProps) => (
	<Svg
		width={30}
		height={30}
		viewBox="0 0 30 30"
		fill="none"
		{...props}
	>
		<Path
			fill={props.fill ?? 'none'}
			stroke={props.stroke ?? '#000'}
			strokeWidth={2}
			d="M12.33 26.625a2.057 2.057 0 1 0 0-4.114 2.057 2.057 0 0 0 0 4.114ZM21.928 26.625a2.057 2.057 0 1 0 0-4.114 2.057 2.057 0 0 0 0 4.114Z"
		/>
		<Path
		fill={props.fill ?? 'none'}
			stroke={props.stroke ?? '#000'}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M3.417 4h2.742l4.805 15.083h10.964"
		/>
		<Path
		fill={props.fill ?? 'none'}
			stroke={props.stroke ?? '#000'}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M9.895 15.655 7.256 7.428h17.15a.686.686 0 0 1 .651.902l-2.285 6.856a.686.686 0 0 1-.65.47H9.895Z"
		/>
	</Svg>
)

const BackArrowIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		{...props}
	>
		<Path
			fill={props.fill ?? "#000"}
			d="m4 10-.707.707L2.586 10l.707-.707L4 10Zm17 8a1 1 0 0 1-2 0h2ZM8.293 15.707l-5-5 1.414-1.414 5 5-1.414 1.414Zm-5-6.414 5-5 1.414 1.414-5 5-1.414-1.414ZM4 9h10v2H4V9Zm17 7v2h-2v-2h2Zm-7-7a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5V9Z"
		/>
	</Svg>
)

const SortIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		{...props}
	>
		<Path fill={props.fill ?? "#000"} d="M8 15H4l6 6V1H8v14Zm6-11v17h2V7h4l-6-6v3Z" />
	</Svg>
)

const CircleIcon = (props: SvgProps) => (
	<Svg
	  width={30}
	  height={30}
	  fill="none"
	  viewBox="0 0 30 30"
	  {...props}
	>
	  <Circle cx={15} cy={15} r={13} fill={props.fill !== 'none' ? props.fill : 'black'} />
	</Svg>
  )

export default { ProfileIcon, CatalogIcon, FavoritesIcon, ArrowRightIcon, SettingsIcon, PickUpIcon, ClockIcon, BasketIcon, BackArrowIcon, SortIcon, CircleIcon }
