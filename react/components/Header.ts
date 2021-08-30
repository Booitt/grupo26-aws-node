import styled from  'styled-components'

const Header = styled.div`
  

  div {
    display: flex;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 1rem;

  }

  p.select {
    cursor: pointer;
    width: 150px;
    padding: 1rem;
    text-align: center;

    &.active {
      background: #f71963;
      color: white;
    }
  }
`

export {
  Header
}