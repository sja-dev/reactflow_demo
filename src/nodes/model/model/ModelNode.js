import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

function ModelNode() {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
        <div className="model-node">
            <div>
                <label htmlFor="text" className="model-node_label">MODEL</label>
                {/* <Menu>
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
                </Menu> */}
            </div>
            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
        </div>
  );
}

export default ModelNode;
