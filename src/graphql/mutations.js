/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLight = /* GraphQL */ `
  mutation CreateLight(
    $input: CreateLightInput!
    $condition: ModelLightConditionInput
  ) {
    createLight(input: $input, condition: $condition) {
      id
      name
      numberOfParticipants
      numberOfCards
      people {
        items {
          id
          firstName
          lastName
          phone
          everyoneHears
          smsPrayerCard
        }
        nextToken
      }
      neighbors {
        items {
          id
          lightID
          neighborID
        }
        nextToken
      }
      weeks {
        items {
          id
          ehNumber
          startDate
          lightID
        }
        nextToken
      }
    }
  }
`;
export const updateLight = /* GraphQL */ `
  mutation UpdateLight(
    $input: UpdateLightInput!
    $condition: ModelLightConditionInput
  ) {
    updateLight(input: $input, condition: $condition) {
      id
      name
      numberOfParticipants
      numberOfCards
      people {
        items {
          id
          firstName
          lastName
          phone
          everyoneHears
          smsPrayerCard
        }
        nextToken
      }
      neighbors {
        items {
          id
          lightID
          neighborID
        }
        nextToken
      }
      weeks {
        items {
          id
          ehNumber
          startDate
          lightID
        }
        nextToken
      }
    }
  }
`;
export const deleteLight = /* GraphQL */ `
  mutation DeleteLight(
    $input: DeleteLightInput!
    $condition: ModelLightConditionInput
  ) {
    deleteLight(input: $input, condition: $condition) {
      id
      name
      numberOfParticipants
      numberOfCards
      people {
        items {
          id
          firstName
          lastName
          phone
          everyoneHears
          smsPrayerCard
        }
        nextToken
      }
      neighbors {
        items {
          id
          lightID
          neighborID
        }
        nextToken
      }
      weeks {
        items {
          id
          ehNumber
          startDate
          lightID
        }
        nextToken
      }
    }
  }
`;
export const createPerson = /* GraphQL */ `
  mutation CreatePerson(
    $input: CreatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    createPerson(input: $input, condition: $condition) {
      id
      firstName
      lastName
      phone
      everyoneHears
      smsPrayerCard
      light {
        id
        name
        numberOfParticipants
        numberOfCards
        people {
          nextToken
        }
        neighbors {
          nextToken
        }
        weeks {
          nextToken
        }
      }
    }
  }
`;
export const updatePerson = /* GraphQL */ `
  mutation UpdatePerson(
    $input: UpdatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    updatePerson(input: $input, condition: $condition) {
      id
      firstName
      lastName
      phone
      everyoneHears
      smsPrayerCard
      light {
        id
        name
        numberOfParticipants
        numberOfCards
        people {
          nextToken
        }
        neighbors {
          nextToken
        }
        weeks {
          nextToken
        }
      }
    }
  }
`;
export const deletePerson = /* GraphQL */ `
  mutation DeletePerson(
    $input: DeletePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    deletePerson(input: $input, condition: $condition) {
      id
      firstName
      lastName
      phone
      everyoneHears
      smsPrayerCard
      light {
        id
        name
        numberOfParticipants
        numberOfCards
        people {
          nextToken
        }
        neighbors {
          nextToken
        }
        weeks {
          nextToken
        }
      }
    }
  }
`;
export const createNeighbor = /* GraphQL */ `
  mutation CreateNeighbor(
    $input: CreateNeighborInput!
    $condition: ModelNeighborConditionInput
  ) {
    createNeighbor(input: $input, condition: $condition) {
      id
      location {
        number
        street
        lat
        lon
      }
      firstName
      lastName
      secondName
      sex
      maritalStatus
      childrenPresent
      houseSize
      incomeMin
      incomeMax
      ageMin
      ageMax
      resLengthMin
      resLengthMax
      lights {
        items {
          id
          lightID
          neighborID
        }
        nextToken
      }
      weeks {
        items {
          id
          weekID
          neighborID
        }
        nextToken
      }
      prayerCount
    }
  }
`;
export const updateNeighbor = /* GraphQL */ `
  mutation UpdateNeighbor(
    $input: UpdateNeighborInput!
    $condition: ModelNeighborConditionInput
  ) {
    updateNeighbor(input: $input, condition: $condition) {
      id
      location {
        number
        street
        lat
        lon
      }
      firstName
      lastName
      secondName
      sex
      maritalStatus
      childrenPresent
      houseSize
      incomeMin
      incomeMax
      ageMin
      ageMax
      resLengthMin
      resLengthMax
      lights {
        items {
          id
          lightID
          neighborID
        }
        nextToken
      }
      weeks {
        items {
          id
          weekID
          neighborID
        }
        nextToken
      }
      prayerCount
    }
  }
`;
export const deleteNeighbor = /* GraphQL */ `
  mutation DeleteNeighbor(
    $input: DeleteNeighborInput!
    $condition: ModelNeighborConditionInput
  ) {
    deleteNeighbor(input: $input, condition: $condition) {
      id
      location {
        number
        street
        lat
        lon
      }
      firstName
      lastName
      secondName
      sex
      maritalStatus
      childrenPresent
      houseSize
      incomeMin
      incomeMax
      ageMin
      ageMax
      resLengthMin
      resLengthMax
      lights {
        items {
          id
          lightID
          neighborID
        }
        nextToken
      }
      weeks {
        items {
          id
          weekID
          neighborID
        }
        nextToken
      }
      prayerCount
    }
  }
`;
export const createLightsAndNeighbors = /* GraphQL */ `
  mutation CreateLightsAndNeighbors(
    $input: CreateLightsAndNeighborsInput!
    $condition: ModelLightsAndNeighborsConditionInput
  ) {
    createLightsAndNeighbors(input: $input, condition: $condition) {
      id
      lightID
      neighborID
      light {
        id
        name
        numberOfParticipants
        numberOfCards
        people {
          nextToken
        }
        neighbors {
          nextToken
        }
        weeks {
          nextToken
        }
      }
      neighbor {
        id
        location {
          number
          street
          lat
          lon
        }
        firstName
        lastName
        secondName
        sex
        maritalStatus
        childrenPresent
        houseSize
        incomeMin
        incomeMax
        ageMin
        ageMax
        resLengthMin
        resLengthMax
        lights {
          nextToken
        }
        weeks {
          nextToken
        }
        prayerCount
      }
    }
  }
`;
export const updateLightsAndNeighbors = /* GraphQL */ `
  mutation UpdateLightsAndNeighbors(
    $input: UpdateLightsAndNeighborsInput!
    $condition: ModelLightsAndNeighborsConditionInput
  ) {
    updateLightsAndNeighbors(input: $input, condition: $condition) {
      id
      lightID
      neighborID
      light {
        id
        name
        numberOfParticipants
        numberOfCards
        people {
          nextToken
        }
        neighbors {
          nextToken
        }
        weeks {
          nextToken
        }
      }
      neighbor {
        id
        location {
          number
          street
          lat
          lon
        }
        firstName
        lastName
        secondName
        sex
        maritalStatus
        childrenPresent
        houseSize
        incomeMin
        incomeMax
        ageMin
        ageMax
        resLengthMin
        resLengthMax
        lights {
          nextToken
        }
        weeks {
          nextToken
        }
        prayerCount
      }
    }
  }
`;
export const deleteLightsAndNeighbors = /* GraphQL */ `
  mutation DeleteLightsAndNeighbors(
    $input: DeleteLightsAndNeighborsInput!
    $condition: ModelLightsAndNeighborsConditionInput
  ) {
    deleteLightsAndNeighbors(input: $input, condition: $condition) {
      id
      lightID
      neighborID
      light {
        id
        name
        numberOfParticipants
        numberOfCards
        people {
          nextToken
        }
        neighbors {
          nextToken
        }
        weeks {
          nextToken
        }
      }
      neighbor {
        id
        location {
          number
          street
          lat
          lon
        }
        firstName
        lastName
        secondName
        sex
        maritalStatus
        childrenPresent
        houseSize
        incomeMin
        incomeMax
        ageMin
        ageMax
        resLengthMin
        resLengthMax
        lights {
          nextToken
        }
        weeks {
          nextToken
        }
        prayerCount
      }
    }
  }
`;
export const createWeeksAndNeighbors = /* GraphQL */ `
  mutation CreateWeeksAndNeighbors(
    $input: CreateWeeksAndNeighborsInput!
    $condition: ModelWeeksAndNeighborsConditionInput
  ) {
    createWeeksAndNeighbors(input: $input, condition: $condition) {
      id
      weekID
      neighborID
      week {
        id
        ehNumber
        startDate
        lightID
        light {
          id
          name
          numberOfParticipants
          numberOfCards
        }
        neighbors {
          nextToken
        }
        card {
          bucket
          region
          key
        }
      }
      neighbor {
        id
        location {
          number
          street
          lat
          lon
        }
        firstName
        lastName
        secondName
        sex
        maritalStatus
        childrenPresent
        houseSize
        incomeMin
        incomeMax
        ageMin
        ageMax
        resLengthMin
        resLengthMax
        lights {
          nextToken
        }
        weeks {
          nextToken
        }
        prayerCount
      }
    }
  }
`;
export const updateWeeksAndNeighbors = /* GraphQL */ `
  mutation UpdateWeeksAndNeighbors(
    $input: UpdateWeeksAndNeighborsInput!
    $condition: ModelWeeksAndNeighborsConditionInput
  ) {
    updateWeeksAndNeighbors(input: $input, condition: $condition) {
      id
      weekID
      neighborID
      week {
        id
        ehNumber
        startDate
        lightID
        light {
          id
          name
          numberOfParticipants
          numberOfCards
        }
        neighbors {
          nextToken
        }
        card {
          bucket
          region
          key
        }
      }
      neighbor {
        id
        location {
          number
          street
          lat
          lon
        }
        firstName
        lastName
        secondName
        sex
        maritalStatus
        childrenPresent
        houseSize
        incomeMin
        incomeMax
        ageMin
        ageMax
        resLengthMin
        resLengthMax
        lights {
          nextToken
        }
        weeks {
          nextToken
        }
        prayerCount
      }
    }
  }
`;
export const deleteWeeksAndNeighbors = /* GraphQL */ `
  mutation DeleteWeeksAndNeighbors(
    $input: DeleteWeeksAndNeighborsInput!
    $condition: ModelWeeksAndNeighborsConditionInput
  ) {
    deleteWeeksAndNeighbors(input: $input, condition: $condition) {
      id
      weekID
      neighborID
      week {
        id
        ehNumber
        startDate
        lightID
        light {
          id
          name
          numberOfParticipants
          numberOfCards
        }
        neighbors {
          nextToken
        }
        card {
          bucket
          region
          key
        }
      }
      neighbor {
        id
        location {
          number
          street
          lat
          lon
        }
        firstName
        lastName
        secondName
        sex
        maritalStatus
        childrenPresent
        houseSize
        incomeMin
        incomeMax
        ageMin
        ageMax
        resLengthMin
        resLengthMax
        lights {
          nextToken
        }
        weeks {
          nextToken
        }
        prayerCount
      }
    }
  }
`;
export const createWeek = /* GraphQL */ `
  mutation CreateWeek(
    $input: CreateWeekInput!
    $condition: ModelWeekConditionInput
  ) {
    createWeek(input: $input, condition: $condition) {
      id
      ehNumber
      startDate
      lightID
      light {
        id
        name
        numberOfParticipants
        numberOfCards
        people {
          nextToken
        }
        neighbors {
          nextToken
        }
        weeks {
          nextToken
        }
      }
      neighbors {
        items {
          id
          weekID
          neighborID
        }
        nextToken
      }
      card {
        bucket
        region
        key
      }
    }
  }
`;
export const updateWeek = /* GraphQL */ `
  mutation UpdateWeek(
    $input: UpdateWeekInput!
    $condition: ModelWeekConditionInput
  ) {
    updateWeek(input: $input, condition: $condition) {
      id
      ehNumber
      startDate
      lightID
      light {
        id
        name
        numberOfParticipants
        numberOfCards
        people {
          nextToken
        }
        neighbors {
          nextToken
        }
        weeks {
          nextToken
        }
      }
      neighbors {
        items {
          id
          weekID
          neighborID
        }
        nextToken
      }
      card {
        bucket
        region
        key
      }
    }
  }
`;
export const deleteWeek = /* GraphQL */ `
  mutation DeleteWeek(
    $input: DeleteWeekInput!
    $condition: ModelWeekConditionInput
  ) {
    deleteWeek(input: $input, condition: $condition) {
      id
      ehNumber
      startDate
      lightID
      light {
        id
        name
        numberOfParticipants
        numberOfCards
        people {
          nextToken
        }
        neighbors {
          nextToken
        }
        weeks {
          nextToken
        }
      }
      neighbors {
        items {
          id
          weekID
          neighborID
        }
        nextToken
      }
      card {
        bucket
        region
        key
      }
    }
  }
`;
