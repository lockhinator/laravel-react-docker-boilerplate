import React from 'react';
import { render, screen } from '@testing-library/react';
import { Label, LabelInterface } from '../../Components/Label';

describe('Label', () => {

    const mockProps = (
        overrideProps: Partial<LabelInterface> = {}
    ): LabelInterface => ({
        forInput: 'someinput',
        value: 'My Value',
        ...overrideProps
    });

    it('renders Label', () => {
        render(<Label {...mockProps()} />);

        expect(screen.getByText('My Value')).toBeInTheDocument();
    });
});
