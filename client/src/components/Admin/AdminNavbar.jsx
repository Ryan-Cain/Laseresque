import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	AppBar,
	Box,
	styled,
	Toolbar,
	Typography,
	Badge,
	Avatar,
	Menu,
	MenuItem,
} from "@mui/material";

const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
});

const Icons = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	gap: "20px",
}));
const UserBox = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	gap: "10px",
}));

const AdminNavbar = () => {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
	return (
		<AppBar position="sticky">
			<StyledToolbar>
				<Typography variant="h6">Laseresque</Typography>
				<Icons>
					<UserBox>
						<Avatar
							onClick={(e) => setOpen(true)}
							sx={{ width: 30, height: 30 }}
							src="https://www.citypng.com/public/uploads/preview/white-user-member-guest-icon-png-image-31634946729lnhivlto5f.png"
						/>
						<Typography>Guest</Typography>
					</UserBox>
				</Icons>
			</StyledToolbar>
			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
				open={open}
				onClose={(e) => setOpen(false)}
				sx={{ marginTop: "40px" }}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<MenuItem>Profile</MenuItem>
				<MenuItem>My account</MenuItem>
				<MenuItem>Logout</MenuItem>
			</Menu>
		</AppBar>
	);
};

export default AdminNavbar;
