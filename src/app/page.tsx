import React from 'react';
import ThemeSwitch from '@/components/csr/ThemeSwitch';
import Container from '@/components/csr/Container';

export default function Home(): React.JSX.Element {
  return (
    <Container>
      opensea <ThemeSwitch />
    </Container>
  );
}
