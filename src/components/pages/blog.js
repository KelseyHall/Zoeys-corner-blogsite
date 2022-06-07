import { Container, Typography } from '@mui/material';
import PickAPost from './blog posts page/pickapost';
import blogEntryData from '../../contentful';
// import IndividualPost from './blog posts page/individualPost';
import BlogPostRouter from './blog posts page/blogRouter';

const BlogPage = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h1">Blog Posts</Typography>
      <Container
        sx={{
          borderTop: { lg: '8px solid' },
          borderBottom: { lg: '8px solid' },
          borderColor: { lg: 'primary.main' },
          padding: { xs: '10px 0', sm: '20px 0' },

          display: { lg: 'flex' },
          flexDirection: { lg: 'row-reverse' },
        }}
      >
        <PickAPost data={blogEntryData} />
        <BlogPostRouter />
      </Container>
    </Container>
  );
};

export default BlogPage;
