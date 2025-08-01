export default function Drop(props: import("react-native-svg").SvgProps) {
  return (
    <Svg
      width={50}
      height={50}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      {...props}
    >
      <Path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1zM18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2M18 22v-3" />
      <Circle cx={10} cy={10} r={3} />
    </Svg>
  );
}

import Svg, { Circle, Path } from "react-native-svg";
