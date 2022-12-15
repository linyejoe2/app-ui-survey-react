import { Backdrop, Box, Typography, useMediaQuery } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const HelpBackdrop: FC<{
  helpStep: number,
  setHelpStep: (helpStep: number) => void
}
> = ({ helpStep, setHelpStep }) => {
  const onMobile = useMediaQuery('(max-width:600px)')
  const { t } = useTranslation()

  switch (helpStep) {
    case 1:
      return (<Backdrop
        sx={{
          color: '#fff',
          zIndex: 999,
          flexDirection: 'column'
        }}
        open={true}
        onClick={() => setHelpStep(0)}
      >
        <Box>
          <Typography variant='h2'>
            {t('help.component.m')}
          </Typography>
        </Box>
        <Box sx={{ pt: 4, display: 'flex' }}>
          <Box sx={{ pr: 2, width: 300 }}>
            <Typography variant='h5'>
              {t('help.component.t')}
            </Typography>
          </Box>
          <Box >
            <img src="./help/component.jpg" alt="img"
              style={{
                width: 500
                // margin: 20
              }}
            />
          </Box>
        </Box>
        <Box sx={{ pt: 2 }}>
          <Typography variant='h6'>
            {t('help.component.t2')}
          </Typography>
        </Box>
      </Backdrop>)
    case 2:
      return (<Backdrop
        sx={{
          color: '#fff',
          zIndex: 999,
          flexDirection: 'column'
        }}
        open={true}
        onClick={() => setHelpStep(0)}
      >
        <Box>
          <Typography variant='h2'>
            {t('help.fixed.m')}
          </Typography>
        </Box>
        <Box sx={{ pt: 4, display: 'flex' }}>
          <Box sx={{ pr: 2, width: 300 }}>
            <Typography variant='h5'>
              {t('help.fixed.t')}
            </Typography>
          </Box>
          <Box >
            <img src="./help/fixed.jpg" alt="img"
              style={{
                width: 300
                // margin: 20
              }}
            />
          </Box>
        </Box>
        <Box sx={{ pt: 2 }}>
          <Typography variant='h6'>
            {t('help.fixed.t2')}
          </Typography>
        </Box>
      </Backdrop>)
    case 3:
      return (<Backdrop
        sx={{
          color: '#fff',
          zIndex: 999,
          flexDirection: 'column'
        }}
        open={true}
        onClick={() => setHelpStep(0)}
      >
        <Box>
          <Typography variant='h2'>
            {t('help.title.m')}
          </Typography>
        </Box>
        <Box sx={{ pt: 4 }}>
          <Typography variant='h5'>
            {t('help.title.t')}
          </Typography>
        </Box>
        <Box sx={{ pt: 2 }}>
          <img src="./help/title.svg" alt="img"
            style={{
              width: onMobile ? '250px' : '600px'
              // margin: 20
            }}
          />
        </Box>
        <Box sx={{ pt: 2 }}>
          <Typography variant='h6'>
            {t('help.title.t2')}
          </Typography>
        </Box>
      </Backdrop>)
    case 4:
      return (<Backdrop
        sx={{
          color: '#fff',
          zIndex: 999,
          flexDirection: 'column'
        }}
        open={true}
        onClick={() => setHelpStep(0)}
      >
        <Box>
          <Typography variant='h2'>
            {t('help.function.m')}
          </Typography>
        </Box>
        <Box sx={{ pt: 4 }}>
          <Typography variant='h5'>
            {t('help.function.t')}
          </Typography>
        </Box>
        <Box sx={{ pt: 2 }}>
          <img src="./help/function.svg" alt="img"
            style={{
              width: onMobile ? '250px' : '600px'
              // margin: 20
            }}
          />
        </Box>
        <Box sx={{ pt: 2 }}>
          <Typography variant='h6'>
            {t('help.function.t2')}
          </Typography>
        </Box>
      </Backdrop>)
    case 5:
      return (<Backdrop
        sx={{
          color: '#fff',
          zIndex: 999,
          flexDirection: 'column'
        }}
        open={true}
        onClick={() => setHelpStep(0)}
      >
        <Box>
          <Typography variant='h2'>
            {t('help.short.m')}
          </Typography>
        </Box>
        <Box sx={{ pt: 4 }}>
          <Typography variant='h5'>
            {t('help.short.t')}
          </Typography>
        </Box>
        <Box sx={{ pt: 2 }}>
          <img src="./help/short.svg" alt="img"
            style={{
              width: onMobile ? '250px' : '400px'
              // margin: 20
            }}
          />
        </Box>
        <Box sx={{ pt: 2 }}>
          <Typography variant='h6'>
            {t('help.short.t2')}
          </Typography>
        </Box>
      </Backdrop>)
    case 6:
      return (<Backdrop
        sx={{
          color: '#fff',
          zIndex: 999,
          flexDirection: 'column'
        }}
        open={true}
        onClick={() => setHelpStep(0)}
      >
        <Box>
          <Typography variant='h2'>
            {t('help.content.m')}
          </Typography>
        </Box>
        <Box sx={{ pt: 4 }}>
          <Typography variant='h5'>
            {t('help.content.t')}
          </Typography>
        </Box>
        <Box sx={{ pt: 2 }}>
          <img src="./help/content.svg" alt="img"
            style={{
              width: onMobile ? '250px' : '400px'
              // margin: 20
            }}
          />
        </Box>
      </Backdrop>)
    case 7:
      return (<Backdrop
        sx={{
          color: '#fff',
          zIndex: 999,
          flexDirection: 'column'
        }}
        open={true}
        onClick={() => setHelpStep(0)}
      >
        <Box>
          <Typography variant='h2'>
            {t('help.nav.m')}
          </Typography>
        </Box>
        <Box sx={{ pt: 4 }}>
          <Typography variant='h5'>
            {t('help.nav.t')}
          </Typography>
        </Box>
        <Box sx={{ pt: 2 }}>
          <img src="./help/nav.svg" alt="img"
            style={{
              width: onMobile ? '250px' : '800px'
              // margin: 20
            }}
          />
        </Box>
      </Backdrop>)
    default:
      return (<></>)
  }
}
