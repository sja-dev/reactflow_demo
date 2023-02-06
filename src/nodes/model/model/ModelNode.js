import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import theme from '../../../utils/theme'
import { 
    ChakraProvider,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react';

function ModelNode() {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <ChakraProvider theme={theme}>
        <div className="model-node">
            <div>
                <label htmlFor="text" className="model-node_label">MODEL</label>
                <Menu>
                    <MenuButton>
                        Actions
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>
            </div>
            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
        </div>
    </ChakraProvider>
  );
}

export default ModelNode;
