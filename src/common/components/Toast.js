import { Toast as nbToast } from 'native-base'
import { toastDuration, moderateScale} from '../commonStyles'

export const Toast = (message, duration = toastDuration) => {
  nbToast.show({
    text: message,
    buttonText: 'OK',
    buttonStyle: { backgroundColor: 'orange', minHeight: moderateScale(45) },
    style: { backgroundColor: 'blue'},
    duration: duration
  })
}