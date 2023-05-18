// ** React Import
import { forwardRef } from 'react'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'

const TextFieldStyled = styled(TextField)(() => ({
  alignItems: 'flex-start',
  '& .MuiInputLabel-root': {
    transform: 'none',
    lineHeight: 1.154,
    position: 'relative',
    marginBottom: '0.25 rem',
    // fontSize: theme.typography.body2.fontSize,
    color: `rgba(47, 43, 61, 0.78) !important`
  },
  '& .MuiInputBase-root': {
    borderRadius: 8,
    backgroundColor: 'transparent !important',
    border: `1px solid rgba(47, 43, 61, 0.2)`,
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    '&:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error):hover': {
      borderColor: `rgba(47,43,61, 0.28)`
    },
    '&:before, &:after': {
      display: 'none'
    },
    '&.MuiInputBase-sizeSmall': {
      borderRadius: 6
    },
    '&.Mui-error': {
      borderColor: '#EA5455'
    },
    '&.Mui-focused': {
      boxShadow: "rgba(47, 43, 61, 0.28) 0px 8px 23px 0px;",
      '& .MuiInputBase-input:not(.MuiInputBase-readOnly):not([readonly])::placeholder': {
        transform: 'translateX(4px)'
      },
      '&.MuiInputBase-colorPrimary': {
        borderColor: '#7367F0'
      },
      '&.MuiInputBase-colorSecondary': {
        borderColor: '#A8AAAE'
      },
      
      '&.Mui-error': {
        borderColor: '#EA5455'
      }
    },
    '&.Mui-disabled': {
      backgroundColor: `rgba(47,43,61, 0.06) !important`
    },
    '& .MuiInputAdornment-root': {
      marginTop: '0 !important'
    }
  },
  '& .MuiInputBase-input': {
    color: 'rgba(47, 43, 61,0.68)',
    '&:not(textarea)': {
      padding: '15.5px 13px'
    },
    '&:not(textarea).MuiInputBase-inputSizeSmall': {
      padding: '7.5px 13px'
    },
    '&:not(.MuiInputBase-readOnly):not([readonly])::placeholder': {
      transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },

    // ** For Autocomplete
    '&.MuiInputBase-inputAdornedStart:not(.MuiAutocomplete-input)': {
      paddingLeft: 0
    },
    '&.MuiInputBase-inputAdornedEnd:not(.MuiAutocomplete-input)': {
      paddingRight: 0
    }
  },
  '& .MuiFormHelperText-root': {
    lineHeight: 1.154,
    // margin: theme.spacing(1, 0, 0),
    color: '#A8AAAE',
    // fontSize: theme.typography.body2.fontSize,
    '&.Mui-error': {
      color: '#EA5455'
    }
  },

  // ** For Select
  '& .MuiSelect-select:focus, & .MuiNativeSelect-select:focus': {
    backgroundColor: 'transparent'
  },
  '& .MuiSelect-filled .MuiChip-root': {
    height: 22
  },

  // ** For Autocomplete
  '& .MuiAutocomplete-input': {
    paddingLeft: '6px !important',
    paddingTop: '7.5px !important',
    paddingBottom: '7.5px !important',
    '&.MuiInputBase-inputSizeSmall': {
      paddingLeft: '6px !important',
      paddingTop: '2.5px !important',
      paddingBottom: '2.5px !important'
    }
  },
  '& .MuiAutocomplete-inputRoot': {
    paddingTop: '8px !important',
    paddingLeft: '8px !important',
    paddingBottom: '8px !important',
    '&:not(.MuiInputBase-sizeSmall).MuiInputBase-adornedStart': {
      paddingLeft: '13px !important'
    },
    '&.MuiInputBase-sizeSmall': {
      paddingTop: '5px !important',
      paddingLeft: '5px !important',
      paddingBottom: '5px !important',
      '& .MuiAutocomplete-tag': {
        margin: 2,
        height: 22
      }
    }
  },

  // ** For Textarea
  '& .MuiInputBase-multiline': {
    padding: '15.25px 13px',
    '&.MuiInputBase-sizeSmall': {
      padding: '7.25px 13px'
    },
    '& textarea.MuiInputBase-inputSizeSmall:placeholder-shown': {
      overflowX: 'hidden'
    }
  },

  // ** For Date Picker
  '& + .react-datepicker__close-icon': {
    top: 11,
    '&:after': {
      fontSize: '1.6rem !important'
    }
  }
}))

const CustomTextField = forwardRef((props, ref) => {
  // ** Props
  const { size = 'small', InputLabelProps, ...rest } = props

  return (
    <TextFieldStyled
      size={size}
      inputRef={ref}
      {...rest}
      variant='filled'
      InputLabelProps={{ ...InputLabelProps, shrink: true }}
    />
  )
})

export default CustomTextField
