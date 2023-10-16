import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CircleIcon from "@mui/icons-material/Circle";

const Sidebar = () => {
	const [open, setOpen] = React.useState(true);

	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<div>
			<List
				sx={{
					width: "100%",
					maxWidth: 360,
					bgcolor: "background.paper",
				}}
				component="nav"
				aria-labelledby="nested-list-subheader"
			>
				<ListItemButton>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText primary="Home" />
				</ListItemButton>
				<ListItemButton>
					<ListItemIcon>
						<PersonIcon />
					</ListItemIcon>
					<ListItemText primary="Profile" />
				</ListItemButton>
				<ListItemButton onClick={handleClick}>
					<ListItemIcon>
						<ShoppingBagIcon />
					</ListItemIcon>
					<ListItemText primary="Shop" />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItemButton sx={{ pl: 4 }}>
							<ListItemIcon>
								<CircleIcon sx={{ fontSize: "small" }} />
							</ListItemIcon>
							<ListItemText primary="Coasters" />
						</ListItemButton>

						<ListItemButton sx={{ pl: 4 }}>
							<ListItemIcon>
								<CircleIcon sx={{ fontSize: "small" }} />
							</ListItemIcon>
							<ListItemText primary="Glassware" />
						</ListItemButton>

						<ListItemButton sx={{ pl: 4 }}>
							<ListItemIcon>
								<CircleIcon sx={{ fontSize: "small" }} />
							</ListItemIcon>
							<ListItemText primary="Misc" />
						</ListItemButton>

						<ListItemButton sx={{ pl: 4 }}>
							<ListItemIcon>
								<CircleIcon sx={{ fontSize: "small" }} />
							</ListItemIcon>
							<ListItemText primary="Mugs" />
						</ListItemButton>

						<ListItemButton sx={{ pl: 4 }}>
							<ListItemIcon>
								<CircleIcon sx={{ fontSize: "small" }} />
							</ListItemIcon>
							<ListItemText primary="Plaques" />
						</ListItemButton>

						<ListItemButton sx={{ pl: 4 }}>
							<ListItemIcon>
								<CircleIcon sx={{ fontSize: "small" }} />
							</ListItemIcon>
							<ListItemText primary="Tumblers" />
						</ListItemButton>
					</List>
				</Collapse>
			</List>
			<div>Cart</div>
		</div>
	);
};

export default Sidebar;
