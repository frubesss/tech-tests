describe('marshmallowsRocketGazer', () => {
  it('successfully loads launches', () => {
    cy.fixture('launches').then((launchesJson) => {
      cy.intercept(
        'GET',
        'https://api.spacexdata.com/v4/launches',
        launchesJson
      )
    })
    cy.fixture('launchPads').then((launchPadsJson) => {
      cy.intercept(
        'GET',
        'https://api.spacexdata.com/v4/launchpads',
        launchPadsJson
      )
    })

    cy.visit('/')

    cy.contains('Marshmallows Rocket Gazer 🚀')

    cy.contains('5eb87cdbffd86e000604b32c')
    cy.contains('Trailblazer')
    cy.contains('Florida')
    cy.contains('2008-08-03T03:34:00.000Z')

    cy.contains('5eb87cdaffd86e000604b32b')
    cy.contains('DemoSat')
    cy.contains('California')
    cy.contains('2023-03-21T01:10:00.000Z')

    cy.contains('5eb87cd9ffd86e000604b32a')
    cy.contains('FalconSat')
    cy.contains('Marshall Islands')
    cy.contains('2006-03-24T22:30:00.000Z')
  })

  it('user can filter launches nationality/location', () => {
    cy.fixture('launches').then((launchesJson) => {
      cy.intercept(
        'GET',
        'https://api.spacexdata.com/v4/launches',
        launchesJson
      )
    })
    cy.fixture('launchPads').then((launchPadsJson) => {
      cy.intercept(
        'GET',
        'https://api.spacexdata.com/v4/launchpads',
        launchPadsJson
      )
    })

    cy.visit('/')

    cy.get('[aria-label="Show filters"]').click()
    cy.get('#mui-31').select('location')
    cy.get('#mui-30').type('Florida')

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000)

    cy.contains('Florida').click()

    cy.contains('5eb87cdbffd86e000604b32c')
    cy.contains('Trailblazer')
    cy.contains('Florida')
    cy.contains('2008-08-03T03:34:00.000Z')

    cy.contains('5eb87cdaffd86e000604b32b').should('not.exist')
    cy.contains('DemoSat').should('not.exist')
    cy.contains('California').should('not.exist')
    cy.contains('2023-03-21T01:10:00.000Z').should('not.exist')

    cy.contains('5eb87cd9ffd86e000604b32a').should('not.exist')
    cy.contains('FalconSat').should('not.exist')
    cy.contains('Marshall Islands').should('not.exist')
    cy.contains('2006-03-24T22:30:00.000Z').should('not.exist')
  })

  it('user can click on more details to view more details about the launch', () => {
    cy.fixture('launches').then((launchesJson) => {
      cy.intercept(
        'GET',
        'https://api.spacexdata.com/v4/launches',
        launchesJson
      )
    })
    cy.fixture('launchPads').then((launchPadsJson) => {
      cy.intercept(
        'GET',
        'https://api.spacexdata.com/v4/launchpads',
        launchPadsJson
      )
    })
    cy.fixture('launch').then((launchJson) => {
      cy.intercept('GET', 'https://api.spacexdata.com/v4/launch/*', launchJson)
    })

    cy.visit('/')

    cy.get(
      '[data-id="5eb87cdaffd86e000604b32b"] > .MuiDataGrid-cell--withRenderer > .MuiButton-root'
    ).click()

    cy.contains('DemoSat')
    cy.contains(
      'Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage'
    )
    cy.contains('Flight Number: 2')
    cy.contains('Launch Date UTC: 2007-03-21T01:10:00.000Z')
    cy.contains('Launch Date Local: 2007-03-21T13:10:00+12:00')
    cy.contains('Upcoming: ❌')
    cy.contains('Success: ❌')
  })

  it('user can navigate back to the launches page after viewing a launches details', () => {
    cy.fixture('launches').then((launchesJson) => {
      cy.intercept(
        'GET',
        'https://api.spacexdata.com/v4/launches',
        launchesJson
      )
    })
    cy.fixture('launchPads').then((launchPadsJson) => {
      cy.intercept(
        'GET',
        'https://api.spacexdata.com/v4/launchpads',
        launchPadsJson
      )
    })
    cy.fixture('launch').then((launchJson) => {
      cy.intercept('GET', 'https://api.spacexdata.com/v4/launch/*', launchJson)
    })

    cy.visit('/')

    cy.get(
      '[data-id="5eb87cdaffd86e000604b32b"] > .MuiDataGrid-cell--withRenderer > .MuiButton-root'
    ).click()

    cy.contains('DemoSat')

    cy.contains('Marshmallows Rocket Gazer 🚀').click()

    cy.contains('5eb87cdbffd86e000604b32c')
    cy.contains('Trailblazer')
    cy.contains('Marshall Islands')
    cy.contains('2008-08-03T03:34:00.000Z')

    cy.contains('5eb87cdaffd86e000604b32b')
    cy.contains('DemoSat')
    cy.contains('California')
    cy.contains('2023-03-21T01:10:00.000Z')

    cy.contains('5eb87cdbffd86e000604b32c')
    cy.contains('FalconSat')
    cy.contains('Florida')
    cy.contains('2006-03-24T22:30:00.000Z')
  })

  // TODO: Add tests for the date sorting
  it('orders launches by launch date ascending', () => {
    cy.fixture('launches').then((launchesJson) => {
      cy.intercept(
        'GET',
        'https://api.spacexdata.com/v4/launches',
        launchesJson
      )
    })
    cy.fixture('launchPads').then((launchPadsJson) => {
      cy.intercept(
        'GET',
        'https://api.spacexdata.com/v4/launchpads',
        launchPadsJson
      )
    })

    cy.visit('/')
  })
})
