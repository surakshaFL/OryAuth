local claims = std.extVar('claims');

{
  identity: {
    traits: {
      email: claims.email,
      full_name:
        if 'name' in claims && claims.name != null && claims.name != ''
        then claims.name
        else claims.login,
    },
  },
}
