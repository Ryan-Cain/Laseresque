import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CircleIcon from "@mui/icons-material/Circle";
import { useNavigate } from "react-router-dom";
import SideCart from "./SideCart";

const Sidebar = ({ sideCartOpen }) => {
	const navigate = useNavigate();

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
				<ListItemButton onClick={() => navigate("/shop")}>
					<ListItemIcon>
						<ShoppingBagIcon />
					</ListItemIcon>
					<ListItemText primary="Shop" />
					{/* {open ? <ExpandLess /> : <ExpandMore />} */}
				</ListItemButton>
				<Collapse in={true} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItemButton
							sx={{ pl: 4 }}
							onClick={() => navigate("/shop/category")}
						>
							<ListItemIcon>
								<CircleIcon sx={{ fontSize: "small" }} />
							</ListItemIcon>
							<ListItemText primary="Coasters" />
						</ListItemButton>

						<ListItemButton
							sx={{ pl: 4 }}
							onClick={() => navigate("/shop/category")}
						>
							<ListItemIcon>
								<CircleIcon sx={{ fontSize: "small" }} />
							</ListItemIcon>
							<ListItemText primary="Glassware" />
						</ListItemButton>

						<ListItemButton
							sx={{ pl: 4 }}
							onClick={() => navigate("/shop/category")}
						>
							<ListItemIcon>
								<CircleIcon sx={{ fontSize: "small" }} />
							</ListItemIcon>
							<ListItemText primary="Misc" />
						</ListItemButton>

						<ListItemButton
							sx={{ pl: 4 }}
							onClick={() => navigate("/shop/category")}
						>
							<ListItemIcon>
								<CircleIcon sx={{ fontSize: "small" }} />
							</ListItemIcon>
							<ListItemText primary="Mugs" />
						</ListItemButton>

						<ListItemButton
							sx={{ pl: 4 }}
							onClick={() => navigate("/shop/category")}
						>
							<ListItemIcon>
								<CircleIcon sx={{ fontSize: "small" }} />
							</ListItemIcon>
							<ListItemText primary="Plaques" />
						</ListItemButton>

						<ListItemButton
							sx={{ pl: 4 }}
							onClick={() => navigate("/shop/category")}
						>
							<ListItemIcon>
								<CircleIcon sx={{ fontSize: "small" }} />
							</ListItemIcon>
							<ListItemText primary="Tumblers" />
						</ListItemButton>
					</List>
				</Collapse>
			</List>
			{sideCartOpen && <SideCart />}
		</div>
	);
};

export default Sidebar;
