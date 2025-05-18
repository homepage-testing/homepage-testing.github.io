/** @jsx jsx */
import { Box, Link, Flex, jsx, useColorMode } from "theme-ui"

const Footer = () => {
  const [colorMode] = useColorMode<"light" | "dark">()
  const isDark = colorMode === `dark`

  return (
    <Box as="footer" variant="layout.footer">
      We are @Libertas B #421 Yonsei University<br/>
      85 Songdogwahak-ro, Yeonsu-gu, Incheon, Republic of Korea<br/><br/>
      Copyright &copy; {new Date().getFullYear()} DIAG. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
      </Flex>
    </Box>
  )
}

export default Footer
