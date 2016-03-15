RequestQ.wait
(
  function() {
      if (RequestQ.result) {
          var err = JSON.parse(RequestQ.result)
          if (err && err.error === "not_found") {
                  var hashAndSalt = generatePasswordHash2(password)
                  RequestQ.push("PUT /_users/org.couchdb.user:", function() {
                              Cushion.put("/_users/org.couchdb.user:" + name, JSON.stringify({
                                          name: name,
                                          password_sha: hashAndSalt[0],
                                          salt: hashAndSalt[1],
                                          password_scheme: 'simple',
                                          type: 'user'
                                      }) // JSON.stringify
                                  ) // Cushion.put
                          } // function
                        )
                      } // if
              } // if
      }
  }
)
