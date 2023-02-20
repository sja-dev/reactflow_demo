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
                <Select
                    defaultValue="lucy"
                    style={{
                        width: 120,
                    }}
                    onChange={handleChange}
                    options={[
                        {
                            value: 'jack',
                            label: 'Jack',
                        },
                        {
                            value: 'lucy',
                            label: 'Lucy',
                        },
                        {
                            value: 'Yiminghe',
                            label: 'yiminghe',
                        },
                        {
                            value: 'disabled',
                            label: 'Disabled',
                            disabled: true,
                        },
                    ]}
                />
            </div>
            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
        </div>
    );
}

export default ModelNode;
