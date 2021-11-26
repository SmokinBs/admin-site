import React from "react";
import Layout from "Layouts";

interface SettingsProps {}

const Settings: React.FC<SettingsProps> = () => {
    return (
        <Layout title="Settings">
            <h1>Local Settings</h1>
        </Layout>
    );
};

export default Settings;

// function themePicker() {
//     const themeOptions = () => [
//         {
//             value: "default",
//             label: (
//                 <Label>
//                     <EvaIcon name="droplet" options={{ fill: "#a6c1ff" }} />
//                     Default
//                 </Label>
//             ),
//         },
//         {
//             value: "dark",
//             label: (
//                 <Label>
//                     <EvaIcon name="droplet" options={{ fill: "#192038" }} />
//                     Dark
//                 </Label>
//             ),
//         },
//         {
//             value: "cosmic",
//             label: (
//                 <Label>
//                     <EvaIcon name="droplet" options={{ fill: "#5a37b8" }} />
//                     Cosmic
//                 </Label>
//             ),
//         },
//         {
//             value: "corporate",
//             label: (
//                 <Label>
//                     <EvaIcon name="droplet" options={{ fill: "#3366ff" }} />
//                     Corporate
//                 </Label>
//             ),
//             selected: true,
//         },
//     ];

//     const Label = styled.span`
//         display: flex;
//         align-items: center;
//     `;

//     const SelectStyled = styled(Select)`
//         min-width: 150px;
//     `;
//     return (
//         <SelectStyled
//             instanceId="react-select-input"
//             isSearchable={false}
//             shape="SemiRound"
//             placeholder="Themes"
//             value={() => window.localStorage.getItem("theme")}
//             options={themeOptions()}
//             onChange={(e: { theme: string }) => window.localStorage.setItem("theme", e.theme)}
//         />
//     );
// }
