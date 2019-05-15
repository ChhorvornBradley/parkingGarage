/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateGarageInput = {
  id?: string | null;
  name?: string | null;
};

export type UpdateGarageInput = {
  id: string;
  name?: string | null;
};

export type DeleteGarageInput = {
  id?: string | null;
};

export type CreateGarageRowInput = {
  id?: string | null;
  level: number;
  position: number;
  garageRowGarageId?: string | null;
};

export enum SpotType {
  motorcycle = "motorcycle",
  compact = "compact",
  large = "large"
}

export type UpdateGarageRowInput = {
  id: string;
  level?: number | null;
  position?: number | null;
  garageRowGarageId?: string | null;
};

export type DeleteGarageRowInput = {
  id?: string | null;
};

export type CreateSpotInput = {
  id?: string | null;
  position: number;
  type: SpotType;
  occupied: boolean;
  version: number;
  spotRowId?: string | null;
};

export type UpdateSpotInput = {
  id: string;
  position?: number | null;
  type?: SpotType | null;
  occupied?: boolean | null;
  version?: number | null;
  spotRowId?: string | null;
};

export type DeleteSpotInput = {
  id?: string | null;
};

export type ModelGarageFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  and?: Array<ModelGarageFilterInput | null> | null;
  or?: Array<ModelGarageFilterInput | null> | null;
  not?: ModelGarageFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelGarageRowFilterInput = {
  id?: ModelIDFilterInput | null;
  level?: ModelIntFilterInput | null;
  position?: ModelIntFilterInput | null;
  and?: Array<ModelGarageRowFilterInput | null> | null;
  or?: Array<ModelGarageRowFilterInput | null> | null;
  not?: ModelGarageRowFilterInput | null;
};

export type ModelIntFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type ModelSpotFilterInput = {
  id?: ModelIDFilterInput | null;
  position?: ModelIntFilterInput | null;
  type?: ModelSpotTypeFilterInput | null;
  occupied?: ModelBooleanFilterInput | null;
  version?: ModelIntFilterInput | null;
  and?: Array<ModelSpotFilterInput | null> | null;
  or?: Array<ModelSpotFilterInput | null> | null;
  not?: ModelSpotFilterInput | null;
};

export type ModelSpotTypeFilterInput = {
  eq?: SpotType | null;
  ne?: SpotType | null;
};

export type ModelBooleanFilterInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type SearchableGarageRowFilterInput = {
  id?: SearchableIDFilterInput | null;
  level?: SearchableIntFilterInput | null;
  position?: SearchableIntFilterInput | null;
  and?: Array<SearchableGarageRowFilterInput | null> | null;
  or?: Array<SearchableGarageRowFilterInput | null> | null;
  not?: SearchableGarageRowFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
};

export type SearchableIntFilterInput = {
  ne?: number | null;
  gt?: number | null;
  lt?: number | null;
  gte?: number | null;
  lte?: number | null;
  eq?: number | null;
  range?: Array<number | null> | null;
};

export type SearchableGarageRowSortInput = {
  field?: SearchableGarageRowSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableGarageRowSortableFields {
  id = "id",
  level = "level",
  position = "position"
}

export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc"
}

export type SearchableSpotFilterInput = {
  id?: SearchableIDFilterInput | null;
  position?: SearchableIntFilterInput | null;
  occupied?: SearchableBooleanFilterInput | null;
  version?: SearchableIntFilterInput | null;
  and?: Array<SearchableSpotFilterInput | null> | null;
  or?: Array<SearchableSpotFilterInput | null> | null;
  not?: SearchableSpotFilterInput | null;
};

export type SearchableBooleanFilterInput = {
  eq?: boolean | null;
  ne?: boolean | null;
};

export type SearchableSpotSortInput = {
  field?: SearchableSpotSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableSpotSortableFields {
  id = "id",
  position = "position",
  occupied = "occupied",
  version = "version"
}

export type CreateGarageMutation = {
  __typename: "Garage";
  id: string;
  name: string | null;
  rows: {
    __typename: "ModelGarageRowConnection";
    items: Array<{
      __typename: "GarageRow";
      id: string;
      level: number;
      position: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateGarageMutation = {
  __typename: "Garage";
  id: string;
  name: string | null;
  rows: {
    __typename: "ModelGarageRowConnection";
    items: Array<{
      __typename: "GarageRow";
      id: string;
      level: number;
      position: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteGarageMutation = {
  __typename: "Garage";
  id: string;
  name: string | null;
  rows: {
    __typename: "ModelGarageRowConnection";
    items: Array<{
      __typename: "GarageRow";
      id: string;
      level: number;
      position: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateGarageRowMutation = {
  __typename: "GarageRow";
  id: string;
  level: number;
  position: number;
  garage: {
    __typename: "Garage";
    id: string;
    name: string | null;
    rows: {
      __typename: "ModelGarageRowConnection";
      nextToken: string | null;
    } | null;
  } | null;
  spots: {
    __typename: "ModelSpotConnection";
    items: Array<{
      __typename: "Spot";
      id: string;
      position: number;
      type: SpotType;
      occupied: boolean;
      version: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateGarageRowMutation = {
  __typename: "GarageRow";
  id: string;
  level: number;
  position: number;
  garage: {
    __typename: "Garage";
    id: string;
    name: string | null;
    rows: {
      __typename: "ModelGarageRowConnection";
      nextToken: string | null;
    } | null;
  } | null;
  spots: {
    __typename: "ModelSpotConnection";
    items: Array<{
      __typename: "Spot";
      id: string;
      position: number;
      type: SpotType;
      occupied: boolean;
      version: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteGarageRowMutation = {
  __typename: "GarageRow";
  id: string;
  level: number;
  position: number;
  garage: {
    __typename: "Garage";
    id: string;
    name: string | null;
    rows: {
      __typename: "ModelGarageRowConnection";
      nextToken: string | null;
    } | null;
  } | null;
  spots: {
    __typename: "ModelSpotConnection";
    items: Array<{
      __typename: "Spot";
      id: string;
      position: number;
      type: SpotType;
      occupied: boolean;
      version: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateSpotMutation = {
  __typename: "Spot";
  id: string;
  position: number;
  type: SpotType;
  occupied: boolean;
  version: number;
  row: {
    __typename: "GarageRow";
    id: string;
    level: number;
    position: number;
    garage: {
      __typename: "Garage";
      id: string;
      name: string | null;
    } | null;
    spots: {
      __typename: "ModelSpotConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateSpotMutation = {
  __typename: "Spot";
  id: string;
  position: number;
  type: SpotType;
  occupied: boolean;
  version: number;
  row: {
    __typename: "GarageRow";
    id: string;
    level: number;
    position: number;
    garage: {
      __typename: "Garage";
      id: string;
      name: string | null;
    } | null;
    spots: {
      __typename: "ModelSpotConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteSpotMutation = {
  __typename: "Spot";
  id: string;
  position: number;
  type: SpotType;
  occupied: boolean;
  version: number;
  row: {
    __typename: "GarageRow";
    id: string;
    level: number;
    position: number;
    garage: {
      __typename: "Garage";
      id: string;
      name: string | null;
    } | null;
    spots: {
      __typename: "ModelSpotConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type GetGarageQuery = {
  __typename: "Garage";
  id: string;
  name: string | null;
  rows: {
    __typename: "ModelGarageRowConnection";
    items: Array<{
      __typename: "GarageRow";
      id: string;
      level: number;
      position: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListGaragesQuery = {
  __typename: "ModelGarageConnection";
  items: Array<{
    __typename: "Garage";
    id: string;
    name: string | null;
    rows: {
      __typename: "ModelGarageRowConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetGarageRowQuery = {
  __typename: "GarageRow";
  id: string;
  level: number;
  position: number;
  garage: {
    __typename: "Garage";
    id: string;
    name: string | null;
    rows: {
      __typename: "ModelGarageRowConnection";
      nextToken: string | null;
    } | null;
  } | null;
  spots: {
    __typename: "ModelSpotConnection";
    items: Array<{
      __typename: "Spot";
      id: string;
      position: number;
      type: SpotType;
      occupied: boolean;
      version: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListGarageRowsQuery = {
  __typename: "ModelGarageRowConnection";
  items: Array<{
    __typename: "GarageRow";
    id: string;
    level: number;
    position: number;
    garage: {
      __typename: "Garage";
      id: string;
      name: string | null;
    } | null;
    spots: {
      __typename: "ModelSpotConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetSpotQuery = {
  __typename: "Spot";
  id: string;
  position: number;
  type: SpotType;
  occupied: boolean;
  version: number;
  row: {
    __typename: "GarageRow";
    id: string;
    level: number;
    position: number;
    garage: {
      __typename: "Garage";
      id: string;
      name: string | null;
    } | null;
    spots: {
      __typename: "ModelSpotConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListSpotsQuery = {
  __typename: "ModelSpotConnection";
  items: Array<{
    __typename: "Spot";
    id: string;
    position: number;
    type: SpotType;
    occupied: boolean;
    version: number;
    row: {
      __typename: "GarageRow";
      id: string;
      level: number;
      position: number;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type SearchGarageRowsQuery = {
  __typename: "SearchableGarageRowConnection";
  items: Array<{
    __typename: "GarageRow";
    id: string;
    level: number;
    position: number;
    garage: {
      __typename: "Garage";
      id: string;
      name: string | null;
    } | null;
    spots: {
      __typename: "ModelSpotConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type SearchSpotsQuery = {
  __typename: "SearchableSpotConnection";
  items: Array<{
    __typename: "Spot";
    id: string;
    position: number;
    type: SpotType;
    occupied: boolean;
    version: number;
    row: {
      __typename: "GarageRow";
      id: string;
      level: number;
      position: number;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateGarageSubscription = {
  __typename: "Garage";
  id: string;
  name: string | null;
  rows: {
    __typename: "ModelGarageRowConnection";
    items: Array<{
      __typename: "GarageRow";
      id: string;
      level: number;
      position: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateGarageSubscription = {
  __typename: "Garage";
  id: string;
  name: string | null;
  rows: {
    __typename: "ModelGarageRowConnection";
    items: Array<{
      __typename: "GarageRow";
      id: string;
      level: number;
      position: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteGarageSubscription = {
  __typename: "Garage";
  id: string;
  name: string | null;
  rows: {
    __typename: "ModelGarageRowConnection";
    items: Array<{
      __typename: "GarageRow";
      id: string;
      level: number;
      position: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateGarageRowSubscription = {
  __typename: "GarageRow";
  id: string;
  level: number;
  position: number;
  garage: {
    __typename: "Garage";
    id: string;
    name: string | null;
    rows: {
      __typename: "ModelGarageRowConnection";
      nextToken: string | null;
    } | null;
  } | null;
  spots: {
    __typename: "ModelSpotConnection";
    items: Array<{
      __typename: "Spot";
      id: string;
      position: number;
      type: SpotType;
      occupied: boolean;
      version: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateGarageRowSubscription = {
  __typename: "GarageRow";
  id: string;
  level: number;
  position: number;
  garage: {
    __typename: "Garage";
    id: string;
    name: string | null;
    rows: {
      __typename: "ModelGarageRowConnection";
      nextToken: string | null;
    } | null;
  } | null;
  spots: {
    __typename: "ModelSpotConnection";
    items: Array<{
      __typename: "Spot";
      id: string;
      position: number;
      type: SpotType;
      occupied: boolean;
      version: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteGarageRowSubscription = {
  __typename: "GarageRow";
  id: string;
  level: number;
  position: number;
  garage: {
    __typename: "Garage";
    id: string;
    name: string | null;
    rows: {
      __typename: "ModelGarageRowConnection";
      nextToken: string | null;
    } | null;
  } | null;
  spots: {
    __typename: "ModelSpotConnection";
    items: Array<{
      __typename: "Spot";
      id: string;
      position: number;
      type: SpotType;
      occupied: boolean;
      version: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateSpotSubscription = {
  __typename: "Spot";
  id: string;
  position: number;
  type: SpotType;
  occupied: boolean;
  version: number;
  row: {
    __typename: "GarageRow";
    id: string;
    level: number;
    position: number;
    garage: {
      __typename: "Garage";
      id: string;
      name: string | null;
    } | null;
    spots: {
      __typename: "ModelSpotConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateSpotSubscription = {
  __typename: "Spot";
  id: string;
  position: number;
  type: SpotType;
  occupied: boolean;
  version: number;
  row: {
    __typename: "GarageRow";
    id: string;
    level: number;
    position: number;
    garage: {
      __typename: "Garage";
      id: string;
      name: string | null;
    } | null;
    spots: {
      __typename: "ModelSpotConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteSpotSubscription = {
  __typename: "Spot";
  id: string;
  position: number;
  type: SpotType;
  occupied: boolean;
  version: number;
  row: {
    __typename: "GarageRow";
    id: string;
    level: number;
    position: number;
    garage: {
      __typename: "Garage";
      id: string;
      name: string | null;
    } | null;
    spots: {
      __typename: "ModelSpotConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateGarage(input: CreateGarageInput): Promise<CreateGarageMutation> {
    const statement = `mutation CreateGarage($input: CreateGarageInput!) {
        createGarage(input: $input) {
          __typename
          id
          name
          rows {
            __typename
            items {
              __typename
              id
              level
              position
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateGarageMutation>response.data.createGarage;
  }
  async UpdateGarage(input: UpdateGarageInput): Promise<UpdateGarageMutation> {
    const statement = `mutation UpdateGarage($input: UpdateGarageInput!) {
        updateGarage(input: $input) {
          __typename
          id
          name
          rows {
            __typename
            items {
              __typename
              id
              level
              position
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateGarageMutation>response.data.updateGarage;
  }
  async DeleteGarage(input: DeleteGarageInput): Promise<DeleteGarageMutation> {
    const statement = `mutation DeleteGarage($input: DeleteGarageInput!) {
        deleteGarage(input: $input) {
          __typename
          id
          name
          rows {
            __typename
            items {
              __typename
              id
              level
              position
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteGarageMutation>response.data.deleteGarage;
  }
  async CreateGarageRow(
    input: CreateGarageRowInput
  ): Promise<CreateGarageRowMutation> {
    const statement = `mutation CreateGarageRow($input: CreateGarageRowInput!) {
        createGarageRow(input: $input) {
          __typename
          id
          level
          position
          garage {
            __typename
            id
            name
            rows {
              __typename
              nextToken
            }
          }
          spots {
            __typename
            items {
              __typename
              id
              position
              type
              occupied
              version
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateGarageRowMutation>response.data.createGarageRow;
  }
  async UpdateGarageRow(
    input: UpdateGarageRowInput
  ): Promise<UpdateGarageRowMutation> {
    const statement = `mutation UpdateGarageRow($input: UpdateGarageRowInput!) {
        updateGarageRow(input: $input) {
          __typename
          id
          level
          position
          garage {
            __typename
            id
            name
            rows {
              __typename
              nextToken
            }
          }
          spots {
            __typename
            items {
              __typename
              id
              position
              type
              occupied
              version
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateGarageRowMutation>response.data.updateGarageRow;
  }
  async DeleteGarageRow(
    input: DeleteGarageRowInput
  ): Promise<DeleteGarageRowMutation> {
    const statement = `mutation DeleteGarageRow($input: DeleteGarageRowInput!) {
        deleteGarageRow(input: $input) {
          __typename
          id
          level
          position
          garage {
            __typename
            id
            name
            rows {
              __typename
              nextToken
            }
          }
          spots {
            __typename
            items {
              __typename
              id
              position
              type
              occupied
              version
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteGarageRowMutation>response.data.deleteGarageRow;
  }
  async CreateSpot(input: CreateSpotInput): Promise<CreateSpotMutation> {
    const statement = `mutation CreateSpot($input: CreateSpotInput!) {
        createSpot(input: $input) {
          __typename
          id
          position
          type
          occupied
          version
          row {
            __typename
            id
            level
            position
            garage {
              __typename
              id
              name
            }
            spots {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSpotMutation>response.data.createSpot;
  }
  async UpdateSpot(input: UpdateSpotInput): Promise<UpdateSpotMutation> {
    const statement = `mutation UpdateSpot($input: UpdateSpotInput!) {
        updateSpot(input: $input) {
          __typename
          id
          position
          type
          occupied
          version
          row {
            __typename
            id
            level
            position
            garage {
              __typename
              id
              name
            }
            spots {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSpotMutation>response.data.updateSpot;
  }
  async DeleteSpot(input: DeleteSpotInput): Promise<DeleteSpotMutation> {
    const statement = `mutation DeleteSpot($input: DeleteSpotInput!) {
        deleteSpot(input: $input) {
          __typename
          id
          position
          type
          occupied
          version
          row {
            __typename
            id
            level
            position
            garage {
              __typename
              id
              name
            }
            spots {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSpotMutation>response.data.deleteSpot;
  }
  async GetGarage(id: string): Promise<GetGarageQuery> {
    const statement = `query GetGarage($id: ID!) {
        getGarage(id: $id) {
          __typename
          id
          name
          rows {
            __typename
            items {
              __typename
              id
              level
              position
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetGarageQuery>response.data.getGarage;
  }
  async ListGarages(
    filter?: ModelGarageFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListGaragesQuery> {
    const statement = `query ListGarages($filter: ModelGarageFilterInput, $limit: Int, $nextToken: String) {
        listGarages(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            rows {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListGaragesQuery>response.data.listGarages;
  }
  async GetGarageRow(id: string): Promise<GetGarageRowQuery> {
    const statement = `query GetGarageRow($id: ID!) {
        getGarageRow(id: $id) {
          __typename
          id
          level
          position
          garage {
            __typename
            id
            name
            rows {
              __typename
              nextToken
            }
          }
          spots {
            __typename
            items {
              __typename
              id
              position
              type
              occupied
              version
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetGarageRowQuery>response.data.getGarageRow;
  }
  async ListGarageRows(
    filter?: ModelGarageRowFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListGarageRowsQuery> {
    const statement = `query ListGarageRows($filter: ModelGarageRowFilterInput, $limit: Int, $nextToken: String) {
        listGarageRows(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            level
            position
            garage {
              __typename
              id
              name
            }
            spots {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListGarageRowsQuery>response.data.listGarageRows;
  }
  async GetSpot(id: string): Promise<GetSpotQuery> {
    const statement = `query GetSpot($id: ID!) {
        getSpot(id: $id) {
          __typename
          id
          position
          type
          occupied
          version
          row {
            __typename
            id
            level
            position
            garage {
              __typename
              id
              name
            }
            spots {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSpotQuery>response.data.getSpot;
  }
  async ListSpots(
    filter?: ModelSpotFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSpotsQuery> {
    const statement = `query ListSpots($filter: ModelSpotFilterInput, $limit: Int, $nextToken: String) {
        listSpots(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            position
            type
            occupied
            version
            row {
              __typename
              id
              level
              position
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSpotsQuery>response.data.listSpots;
  }
  async SearchGarageRows(
    filter?: SearchableGarageRowFilterInput,
    sort?: SearchableGarageRowSortInput,
    limit?: number,
    nextToken?: number
  ): Promise<SearchGarageRowsQuery> {
    const statement = `query SearchGarageRows($filter: SearchableGarageRowFilterInput, $sort: SearchableGarageRowSortInput, $limit: Int, $nextToken: Int) {
        searchGarageRows(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            level
            position
            garage {
              __typename
              id
              name
            }
            spots {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchGarageRowsQuery>response.data.searchGarageRows;
  }
  async SearchSpots(
    filter?: SearchableSpotFilterInput,
    sort?: SearchableSpotSortInput,
    limit?: number,
    nextToken?: number
  ): Promise<SearchSpotsQuery> {
    const statement = `query SearchSpots($filter: SearchableSpotFilterInput, $sort: SearchableSpotSortInput, $limit: Int, $nextToken: Int) {
        searchSpots(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            position
            type
            occupied
            version
            row {
              __typename
              id
              level
              position
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchSpotsQuery>response.data.searchSpots;
  }
  OnCreateGarageListener: Observable<OnCreateGarageSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateGarage {
        onCreateGarage {
          __typename
          id
          name
          rows {
            __typename
            items {
              __typename
              id
              level
              position
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateGarageSubscription>;

  OnUpdateGarageListener: Observable<OnUpdateGarageSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateGarage {
        onUpdateGarage {
          __typename
          id
          name
          rows {
            __typename
            items {
              __typename
              id
              level
              position
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateGarageSubscription>;

  OnDeleteGarageListener: Observable<OnDeleteGarageSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteGarage {
        onDeleteGarage {
          __typename
          id
          name
          rows {
            __typename
            items {
              __typename
              id
              level
              position
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteGarageSubscription>;

  OnCreateGarageRowListener: Observable<
    OnCreateGarageRowSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateGarageRow {
        onCreateGarageRow {
          __typename
          id
          level
          position
          garage {
            __typename
            id
            name
            rows {
              __typename
              nextToken
            }
          }
          spots {
            __typename
            items {
              __typename
              id
              position
              type
              occupied
              version
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateGarageRowSubscription>;

  OnUpdateGarageRowListener: Observable<
    OnUpdateGarageRowSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateGarageRow {
        onUpdateGarageRow {
          __typename
          id
          level
          position
          garage {
            __typename
            id
            name
            rows {
              __typename
              nextToken
            }
          }
          spots {
            __typename
            items {
              __typename
              id
              position
              type
              occupied
              version
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateGarageRowSubscription>;

  OnDeleteGarageRowListener: Observable<
    OnDeleteGarageRowSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteGarageRow {
        onDeleteGarageRow {
          __typename
          id
          level
          position
          garage {
            __typename
            id
            name
            rows {
              __typename
              nextToken
            }
          }
          spots {
            __typename
            items {
              __typename
              id
              position
              type
              occupied
              version
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteGarageRowSubscription>;

  OnCreateSpotListener: Observable<OnCreateSpotSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateSpot {
        onCreateSpot {
          __typename
          id
          position
          type
          occupied
          version
          row {
            __typename
            id
            level
            position
            garage {
              __typename
              id
              name
            }
            spots {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateSpotSubscription>;

  OnUpdateSpotListener: Observable<OnUpdateSpotSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSpot {
        onUpdateSpot {
          __typename
          id
          position
          type
          occupied
          version
          row {
            __typename
            id
            level
            position
            garage {
              __typename
              id
              name
            }
            spots {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateSpotSubscription>;

  OnDeleteSpotListener: Observable<OnDeleteSpotSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSpot {
        onDeleteSpot {
          __typename
          id
          position
          type
          occupied
          version
          row {
            __typename
            id
            level
            position
            garage {
              __typename
              id
              name
            }
            spots {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteSpotSubscription>;
}
