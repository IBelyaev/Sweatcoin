import React from 'react';
import { Spinner4 } from 'styled-icons/icomoon';
import styled from 'styled-components';

interface WithLoadingProps {
  loading: boolean;
}
  
function renderLoadingPage() {
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
  `;

  const Text = styled.p`
    padding-right: 10px;
  `;

  return (
    <Wrapper>
      <Text>Загрузка</Text>
      <Spinner4 size="24" />
    </Wrapper>
  )
}

export const withLoading = (Component: React.ComponentType<any>) =>
    class WithLoading extends React.Component<any & WithLoadingProps> {
      render() {
        const { loading, ...props } = this.props as WithLoadingProps;

        return loading ? renderLoadingPage() : <Component {...props}/>;
      }
};