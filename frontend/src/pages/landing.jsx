import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Box, 
  Button, 
  Container, 
  Typography, 
  AppBar, 
  Toolbar, 
  Grid, 
  Card, 
  CardContent, 
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  VideoCall as VideoCallIcon,
  Group as GroupIcon,
  Security as SecurityIcon,
  Devices as DevicesIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f8f9fa',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      marginBottom: '1rem',
    },
    h2: {
      fontWeight: 600,
      marginBottom: '1.5rem',
    },
    h4: {
      fontWeight: 500,
      marginBottom: '1rem',
    },
  },
});

const FeatureCard = ({ icon, title, description }) => (
  <Card sx={{ 
    height: '100%', 
    borderRadius: 2, 
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
    }
  }}>
    <CardContent sx={{ p: 3 }}>
      <Box sx={{ 
        width: 60, 
        height: 60, 
        bgcolor: 'primary.light', 
        borderRadius: '50%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        mb: 2
      }}>
        {icon}
      </Box>
      <Typography variant="h6" component="h3" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default function LandingPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const features = [
    {
      icon: <VideoCallIcon color="primary" sx={{ fontSize: 32 }} />,
      title: 'HD Video Calls',
      description: 'Crystal clear video and audio quality for seamless communication.'
    },
    {
      icon: <GroupIcon color="primary" sx={{ fontSize: 32 }} />,
      title: 'Group Meetings',
      description: 'Connect with multiple participants in a single call.'
    },
    {
      icon: <SecurityIcon color="primary" sx={{ fontSize: 32 }} />,
      title: 'Secure & Private',
      description: 'End-to-end encryption to keep your conversations private.'
    },
    {
      icon: <DevicesIcon color="primary" sx={{ fontSize: 32 }} />,
      title: 'Cross-Platform',
      description: 'Works on all your devices, anywhere, anytime.'
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default'
      }}>
        {/* Navigation */}
        <AppBar position="sticky" color="transparent" elevation={0} sx={{ bgcolor: 'white', py: 1 }}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                <VideoCallIcon color="primary" sx={{ fontSize: 32, mr: 1 }} />
                <Typography variant="h6" component="div" sx={{ 
                  fontWeight: 700, 
                  color: 'primary.main',
                  display: { xs: 'none', sm: 'block' }
                }}>
                  MeetConnect
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Button 
                  color="inherit"
                  onClick={() => navigate("/aljk23")}
                  sx={{ textTransform: 'none' }}
                >
                  Join as Guest
                </Button>
                <Button 
                  variant="outlined" 
                  onClick={() => navigate("/auth")}
                  sx={{ textTransform: 'none' }}
                >
                  Sign Up
                </Button>
                <Button 
                  variant="contained" 
                  onClick={() => navigate("/auth")}
                  sx={{ textTransform: 'none' }}
                >
                  Login
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Hero Section */}
        <Box component="main" sx={{ flex: 1, py: { xs: 4, md: 8 } }}>
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography 
                  variant={isMobile ? 'h3' : 'h1'}
                  component="h1"
                  gutterBottom
                >
                  <Box component="span" color="primary.main">Connect</Box> with your loved ones
                </Typography>
                <Typography 
                  variant={isMobile ? 'h5' : 'h4'} 
                  color="text.secondary" 
                  paragraph
                  sx={{ mb: 4 }}
                >
                  High-quality video calls for everyone
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button 
                    variant="contained" 
                    size="large"
                    onClick={() => navigate("/auth")}
                    endIcon={<ArrowForwardIcon />}
                    sx={{ 
                      px: 4, 
                      py: 1.5,
                      borderRadius: '50px',
                      textTransform: 'none',
                      fontSize: '1.1rem'
                    }}
                  >
                    Get Started
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="large"
                    onClick={() => navigate("/aljk23")}
                    sx={{ 
                      px: 4, 
                      py: 1.5,
                      borderRadius: '50px',
                      textTransform: 'none',
                      fontSize: '1.1rem'
                    }}
                  >
                    Join as Guest
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  position: 'relative',
                  '& img': {
                    width: '100%',
                    height: 'auto',
                    borderRadius: 4,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  }
                }}>
                  <img 
                    src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg" 
                    alt="Video call illustration" 
                  />
                </Box>
              </Grid>
            </Grid>

            {/* Features Section */}
            <Box sx={{ mt: 12, mb: 8 }}>
              <Typography variant="h4" component="h2" align="center" gutterBottom>
                Why Choose MeetConnect?
              </Typography>
              <Typography variant="h6" color="text.secondary" align="center" paragraph sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}>
                Experience seamless video calling with our powerful features
              </Typography>
              
              <Grid container spacing={4}>
                {features.map((feature, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <FeatureCard {...feature} />
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* CTA Section */}
            <Box sx={{ 
              bgcolor: 'primary.main', 
              borderRadius: 4, 
              p: 6, 
              textAlign: 'center',
              color: 'white',
              background: 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)',
              mb: 8
            }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Ready to get started?
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Join thousands of happy users today
              </Typography>
              <Button 
                variant="contained" 
                size="large"
                onClick={() => navigate("/auth")}
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.9)',
                  }
                }}
              >
                Sign Up for Free
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Footer */}
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 4, borderTop: '1px solid', borderColor: 'divider' }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <VideoCallIcon color="primary" sx={{ fontSize: 32, mr: 1 }} />
                  <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    MeetConnect
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Making video calls simple, secure, and accessible to everyone.
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>Product</Typography>
                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                  {['Features', 'Pricing', 'Download', 'Security'].map((item) => (
                    <li key={item} style={{ marginBottom: '8px' }}>
                      <Typography 
                        component="a" 
                        href="#" 
                        sx={{ 
                          textDecoration: 'none', 
                          color: 'text.secondary',
                          '&:hover': { color: 'primary.main' }
                        }}
                      >
                        {item}
                      </Typography>
                    </li>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>Company</Typography>
                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                  {['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                    <li key={item} style={{ marginBottom: '8px' }}>
                      <Typography 
                        component="a" 
                        href="#" 
                        sx={{ 
                          textDecoration: 'none', 
                          color: 'text.secondary',
                          '&:hover': { color: 'primary.main' }
                        }}
                      >
                        {item}
                      </Typography>
                    </li>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>Support</Typography>
                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                  {['Help Center', 'Community', 'Tutorials', 'Status'].map((item) => (
                    <li key={item} style={{ marginBottom: '8px' }}>
                      <Typography 
                        component="a" 
                        href="#" 
                        sx={{ 
                          textDecoration: 'none', 
                          color: 'text.secondary',
                          '&:hover': { color: 'primary.main' }
                        }}
                      >
                        {item}
                      </Typography>
                    </li>
                  ))}
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
              <Typography variant="body2" color="text.secondary" align="center">
                {new Date().getFullYear()} MeetConnect. All rights reserved.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
