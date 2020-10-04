export default theme-test = {
    breakpoints: [ '40em', '56em', '64em' ],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    colors: {
      text: "#333",
      background: "#303437",
      primary: "#303437",
      secondary: "#ff6347",
      accent: "#xxxxx",
      highlight: "#",
      muted: "#",
      modes: {
          dark: {
            text: "#333",
            background: "#fff",
            primary: "#639",
            secondary: "#ff6347",
            accent: "#xxxxx",
            highlight: "#",
            muted: "#",
          }
      }
    },
    fonts: {
      body: "system-ui, sans-serif",
      heading: "system-ui, sans-serif",
      monospace: "Menlo, monospace",
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125,
    },
    letterSpacings: {
        body: 'normal',
        caps: '0.2rem',
    },
    styles: {
        h1: {
            fontSize: 32,
            fontFamly: 'heading',
            fontWeight: 'heading',
            color: 'primary',
            mt: 4,
            mb: 2,
        },
    },
  }