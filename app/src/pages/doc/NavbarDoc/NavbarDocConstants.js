const NavbarDocConstants = {
	Attributes: {
		Name: 'name',
		Url: 'url',
		Open: 'open',
		Type: 'type',
	},
	Slots: {
		DefaultSlot: 'defaultSlot',
	},
	DefaultValues: {
		DefaultSlot: `<yeeyee-drawer-item>
				ONE
			</yeeyee-drawer-item>
			<yeeyee-drawer-item>
				TWO
			</yeeyee-drawer-item>
			<yeeyee-drawer-item>
				THREE
			</yeeyee-drawer-item>
		`,
		Name: 'This is my name',
		Open: false,
	},
};

export default NavbarDocConstants;
