import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
import {moderateScale} from '@themes/responsive';
import colors from '@themes/color';

const SvgComponent = ({size = 25, color = colors.black}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={moderateScale(size)}
    height={moderateScale(size)}
    fill="none">
    <Path
      fill={color}
      d="M5.16921 16.1764C5.01426 16.1764 4.85932 16.1193 4.737 15.997C3.61977 14.8716 3 13.3874 3 11.8135C3 8.54342 5.65035 5.88492 8.91231 5.88492L13.8623 5.90123L12.9735 5.05312C12.7288 4.81663 12.7207 4.43335 12.9572 4.1887C13.1936 3.94405 13.5769 3.9359 13.8216 4.17239L15.8114 6.08064C15.9908 6.25189 16.0479 6.521 15.9582 6.74934C15.8685 6.97768 15.6401 7.13262 15.3873 7.13262L8.91231 7.11631C6.32721 7.11631 4.22324 9.22844 4.22324 11.8217C4.22324 13.0694 4.71253 14.2519 5.60142 15.1407C5.83791 15.3772 5.83791 15.7687 5.60142 16.0052C5.47909 16.1193 5.32415 16.1764 5.16921 16.1764Z"
    />
    <Path
      d="M11.1594 20.7372C11.0046 20.7372 10.8579 20.6802 10.7357 20.5661L8.7471 18.659C8.56781 18.4879 8.51076 18.219 8.60041 17.9908C8.69821 17.7626 8.9264 17.6403 9.17089 17.6077L15.65 17.624C18.2335 17.624 20.3361 15.5132 20.3361 12.9216C20.3361 11.6747 19.8471 10.4929 18.9588 9.60461C18.7225 9.36827 18.7225 8.97708 18.9588 8.74073C19.1952 8.50439 19.5863 8.50439 19.8227 8.74073C20.9392 9.86541 21.5586 11.3487 21.5586 12.9216C21.5586 16.1897 18.9099 18.8465 15.65 18.8465L10.7031 18.8302L11.5914 19.6778C11.8359 19.9141 11.844 20.2972 11.6077 20.5416C11.4773 20.672 11.3224 20.7372 11.1594 20.7372Z"
      fill={color}
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;