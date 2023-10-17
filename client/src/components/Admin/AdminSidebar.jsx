import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import GridViewIcon from "@mui/icons-material/GridView";
import PersonIcon from "@mui/icons-material/Person";
import ApprovalIcon from "@mui/icons-material/Approval";
import InventoryIcon from "@mui/icons-material/Inventory";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

const AdminSidebar = () => {
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
				<ListItemButton onClick={() => navigate("/admin/approvals")}>
					<ListItemIcon>
						<ApprovalIcon />
					</ListItemIcon>
					<ListItemText primary="Approvals" />
				</ListItemButton>
				<ListItemButton onClick={() => navigate("/admin/categories")}>
					<ListItemIcon>
						<GridViewIcon />
					</ListItemIcon>
					<ListItemText primary="Categories" />
				</ListItemButton>
				<ListItemButton>
					<ListItemIcon>
						<AssignmentIcon />
					</ListItemIcon>
					<ListItemText primary="Orders" />
				</ListItemButton>
				<ListItemButton onClick={() => navigate("/admin/products")}>
					<ListItemIcon>
						<InventoryIcon />
					</ListItemIcon>
					<ListItemText primary="Products" />
				</ListItemButton>
				<ListItemButton>
					<ListItemIcon>
						<TrendingUpIcon />
					</ListItemIcon>
					<ListItemText primary="Sales" />
				</ListItemButton>
				<ListItemButton>
					<ListItemIcon>
						<SettingsIcon />
					</ListItemIcon>
					<ListItemText primary="Settings" />
				</ListItemButton>
			</List>
		</div>
	);
};

export default AdminSidebar;
