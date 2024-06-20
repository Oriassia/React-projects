import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function PostsPage() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {posts.map((post) => {
        return (
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="R" src="none.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={post.title}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {() => {
                      const user = users.find(
                        (user) => user.id === post.userId
                      );
                      return `${user.firstName}${user.lastName}`;
                    }}
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
}

const posts = [
  {
    id: "3771fbfa-1e30-4246-89e9-e2ed074bef57",
    title: "Also across both worker indicate.",
    body: "Trade into also prepare. Assume image right apply. Reality teach less yourself perhaps career design.",
    userId: "9b5b7206-0ddf-4fda-850b-58822e33383c",
    reactions: {
      likes: 16,
    },
    comments: [],
    createdAt: "2024-04-24T13:25:44",
    updatedAt: "2024-05-01T13:25:44",
  },
  {
    id: "dfb25406-ef82-424d-899d-dacd48768d1f",
    title: "Growth human size relationship staff anything gun cost.",
    body: "Chair later almost book media leg front. Hit move turn her. Around discover off behavior president enough item.",
    userId: "999cad49-136e-4bdc-b36a-bbab653a6c72",
    reactions: {
      likes: 33,
    },
    comments: [
      {
        userId: "6cffc8ef-fb1a-44a7-a4c9-1b7b9656e5d7",
        content: "Country before pressure.",
        createdAt: "2024-01-19T07:55:07",
      },
      {
        userId: "d6b71efa-3523-4f49-8a9c-8c528b09b18e",
        content:
          "Management seek pretty challenge open beat remain production.",
        createdAt: "2024-06-10T03:01:17",
      },
    ],
    createdAt: "2024-04-27T00:53:27",
    updatedAt: "2024-05-06T00:53:27",
  },
];

const users = [
  {
    id: "9b5b7206-0ddf-4fda-850b-58822e33383c",
    username: "lauriegutierrez",
    password: ")qs&LCp^05",
    firstName: "Ashley",
    lastName: "Hernandez",
    postIds: [
      "3771fbfa-1e30-4246-89e9-e2ed074bef57",
      "7c4f39bb-03c1-4c52-bf9a-ce9e13464c72",
      "ea57394c-22f2-4482-aafa-5b478998638c",
      "e846336b-563f-46db-80e8-2230a679a09b",
      "9a252058-fa90-4bee-b93b-842decb16d7b",
      "3d81c5fb-8a0a-4ac5-9aeb-f0aec91f6dde",
    ],
  },
  {
    id: "999cad49-136e-4bdc-b36a-bbab653a6c72",
    username: "hickmanandrew",
    password: "*yPbNk82X6",
    firstName: "Katie",
    lastName: "Davidson",
    postIds: [
      "dfb25406-ef82-424d-899d-dacd48768d1f",
      "1cc73885-bdef-4cab-b0a9-b941af2d1f4c",
    ],
  },
  {
    id: "e5563504-e76e-4574-bfb6-b643043b28bb",
    username: "kchambers",
    password: "%b%X!4Liz0",
    firstName: "William",
    lastName: "Walker",
    postIds: ["c7936b48-bb8b-4948-8c14-8c6b5d7e93e6"],
  },
  {
    id: "4a662804-7145-48be-b538-b0550f913190",
    username: "owalters",
    password: "aYDxqUxf$0",
    firstName: "Kristen",
    lastName: "Barber",
    postIds: [
      "c0d089ae-6466-4a23-9638-2bc15f9b19a0",
      "2827caf5-0a37-4af0-adec-2be678b4ea3a",
      "5c8c33b0-7c24-4e7e-b49c-afff69b45931",
      "b8904d34-a6f6-476e-827d-0bdd53195977",
      "ab1c146b-16b2-49d2-bbf1-3fb1cab16424",
      "cea953f7-1ab0-4521-8a16-9846081f4e35",
      "c563407d-ece5-4d8c-a063-16419fa1c7a0",
    ],
  },
  {
    id: "9c5f8eb9-2018-4894-ab1c-728f6ca2f1f4",
    username: "randymiller",
    password: "i4DYLy@9!n",
    firstName: "Alison",
    lastName: "Parker",
    postIds: [
      "b54fa9df-5f1c-43e2-b7c1-01b6096b2d45",
      "f388d09f-c67a-4b7e-90e6-195ff5221db2",
      "e9c1e7c6-0e18-4675-a2fb-490d898e722b",
      "fecfe575-5a7d-4d10-9f91-3c095a082036",
      "dfc36473-7ae1-4c84-b12f-29f0b7cb1adb",
      "bb649761-f936-4623-a2e8-562efea78521",
      "cf3b48ad-9557-4454-888d-83de6781f7f5",
    ],
  },
  {
    id: "da1e17e0-9569-4d55-810d-e51c09902b8e",
    username: "tammy65",
    password: "%0AktgJx01",
    firstName: "Courtney",
    lastName: "Jackson",
    postIds: [
      "922f3256-1fb6-4637-a768-9222fe2f9a17",
      "76eb6317-64c6-4b4c-a9ea-91313a3a0c88",
      "c4fbf021-8517-4704-81fa-67b4f4f685fe",
    ],
  },
  {
    id: "bd7500d6-4dae-4dcf-b8c5-45abc333b21e",
    username: "erin39",
    password: "@K*WIOa+P7",
    firstName: "Kevin",
    lastName: "Lucero",
    postIds: [
      "04a6d7e7-ae3a-4a41-8321-2a5a5e21903a",
      "c854fabd-1309-496b-9c7f-6759a47d363b",
      "2d55155c-71a5-49dc-aea6-aea2bfb13d92",
      "a302f582-ee91-4c7e-8068-d30e342e2653",
      "a64d0100-2606-4e66-8d64-03cab9809bda",
    ],
  },
  {
    id: "6cffc8ef-fb1a-44a7-a4c9-1b7b9656e5d7",
    username: "lori77",
    password: "04V5*KYdi+",
    firstName: "Monica",
    lastName: "Hayes",
    postIds: [
      "4723e53c-1568-47c3-b111-d231eae68c88",
      "807d7e07-66dd-4f3c-97f8-e9f5492d4001",
      "16fc0524-60f6-43f9-bd0e-36b405e1289d",
    ],
  },
  {
    id: "d6b71efa-3523-4f49-8a9c-8c528b09b18e",
    username: "jordandebra",
    password: "$9vJTUxVrh",
    firstName: "Lindsay",
    lastName: "Olson",
    postIds: [
      "9303ca4f-efcf-41bb-a820-10283b650162",
      "d3ca9fef-3eed-4121-9b91-803569f26e04",
      "ce062f2b-810d-47c6-838f-5886416ebb17",
      "f8ddc6b6-aa50-4678-ad59-dfd7f11ea6df",
      "6464adf6-a0f1-4664-af1e-86eec40c9f62",
    ],
  },
  {
    id: "98aac92c-a796-44ce-b3d6-8e33d79f4e81",
    username: "gthompson",
    password: "%3%X8fD$7p",
    firstName: "Donald",
    lastName: "Medina",
    postIds: [
      "c7d2dd90-0cb2-4383-9a1d-c32294f9aac9",
      "406a73a2-4215-4f40-81e5-009ec0c2c79e",
      "a247a494-8ac8-42cd-b47d-c329027dabe3",
      "0845e457-55c4-477a-9d43-428e8ad8a081",
      "05c9609b-7152-43ba-99c8-93e978ad5e83",
      "20199d2f-cf35-4f05-bf86-1f1a38f05f53",
      "398b3d5d-f9cc-4d71-b454-15e1fbaa04c1",
      "1d1ea393-5ff4-4031-a9cc-071212eb0cb8",
      "d7f1b714-3c4f-4568-9773-5ce5fec33c3b",
      "77178b11-7dcb-4726-a03d-cea4e5eeaf21",
      "2b722175-708d-446f-ae7c-8675baf582c8",
    ],
  },
];

export default PostsPage;
