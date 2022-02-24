function gql(literals, ...args) {
  console.log(args);
}

gql`
  query Test {
    a
    b
    c
    d
  }
`;
