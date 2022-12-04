import './AboutPage.css'
import { useTranslation } from 'react-i18next'
import { Box, Grid, Typography, useMediaQuery } from '@mui/material'

export const AboutPage = () => {
  const { t } = useTranslation()
  const onLaptop = useMediaQuery('(max-width:1000px)')
  const onMobile = useMediaQuery('(max-width:600px)')
  return (
    <Box className="app">
      <Typography variant="h1"
        sx={{
          mb: 4
        }}>
        {t('about-us.title')}
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item lg={6} md={12} xs={12}>
          <img src="./TP.svg" alt="img"
            style={{
              width: onLaptop ? '200px' : '400px'
              // margin: 20
            }}
          />
        </Grid>
        <Grid item lg={6} md={12} xs={12}
          sx={{
            // textAlign: onLaptop ? "center" : "left",
            p: 2
          }}>
          <Typography variant="h3"
            sx={{
              mb: 4
            }}>
            {t('about-us.tp-young')}
          </Typography>
          <Typography variant="body1"
            sx={{
              width: onMobile ? 300 : onLaptop ? 500 : undefined,
              margin: onLaptop ? 'auto' : undefined,
              textAlign: !onLaptop ? 'left' : undefined
            }}>
            {/* {t('about-us.t')} */}
            躺平少年團 TP young 創立於 2022 年 10 月，由台北大學數位行銷學程的兩位學生領導，
            致力於研究社群、行銷以及網際網路。
            <br /><br />雖然在這個嚴峻的時代，經濟壓的每個年輕人都喘不過氣，
            導致大家都想要躺平，但躺平之餘，我們也想做出一些事情來證明我們，為社會做出微薄的貢獻，
            並將我們的足跡留在網路上。
            <br /><br />我們的使命就是讓世界可以因為有我們，而有一點小小的變化。
          </Typography>
        </Grid>
      </Grid>
    </Box >
  )
}
