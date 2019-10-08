function checkClass() {
  var weekday = prompt('曜日は？')
  var period = prompt('時限は？')

  switch (weekday) {
    case '月曜日':
      switch (period) {
        case '1':
          alert('DS2')
          break

        default:
          alert('何も履修していません')
      }
      break

    case '火曜日':
      switch (period) {
        case '2':
          alert('情報基礎')

          break

        default:
          alert('何も履修していません')
      }
      break

    case '水曜日':
      switch (period) {
        case '1':
          alert('現代政治論')
          break
        default:
          alert('何も履修していません')
      }
      break

    case '木曜日':
      switch (period) {
        case '2':
          alert('戦略的交渉論')
          break

        default:
          alert('何も履修していません')
      }
      break

    default:
      alert('何も履修していません')
  }

  // switch (weekday) {
  //     case '月曜日':
  //       switch (period) {
  //         case '2':
  //           alert('英語')
  //           break
  //
  //         default:
  //           alert('何も履修していません')
  //       }
  // }
  //
  // switch (weekday) {
  //     case '火曜日':
  //       switch (period) {
  //         case '1':
  //           alert('情報基礎')
  //           break
  //
  //         default:
  //           alert('何も履修していません')
  //       }
  // }
  //
  //       switch (weekday) {
  //           case '水曜日':
  //             switch (period) {
  //               case '3':
  //                 alert('現代政治論')
  //                 break
  //
  //               default:
  //                 alert('何も履修していません')
  //             }
  // }
  //
  //       break
  //     default:
  //     alert("何も履修していません")
  //   }
  // }
}
