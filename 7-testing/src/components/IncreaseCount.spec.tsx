import {beforeEach, describe, expect, it} from 'vitest';
import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import IncreaseCount from "./IncreaseCount.tsx";
import {userEvent} from "@testing-library/user-event";
import MagicNumberTransformer from "./MagicNumberTransformer.tsx";


vi.mock("./MagicNumberTransformer.tsx", () => ({default: vi.fn(() => <div>Mocked MagicNumberTransformer</div>)}))

describe("IncreaseCount", () => {

  describe("when the app is initialized", () => {

    beforeEach(() => {
      // Arrange
      render(<IncreaseCount/>);
    })

    it('should render the headline correctly', () => {
      // Act
      // ...

      // Assert
      const h1 = screen.queryByText('Vite + React');
      expect(h1).toBeInTheDocument();
    });

    it('should show the MagicNumberTransformer', () => {
      const mockedMagicNumberTransformer: HTMLElement = screen.getByText("Mocked MagicNumberTransformer")
      expect(mockedMagicNumberTransformer).toBeInTheDocument();
    });
  })

  describe("when the button was clicked", () => {

    let counterButton: HTMLButtonElement;

    beforeEach(async () => {
      // Arrange
      render(<IncreaseCount/>);

      // Act
      counterButton = screen.getByRole("button");
      await userEvent.click(counterButton);
    })

    it('should increase the counter', () => {
      // Assert
      expect(counterButton.textContent).toBe("count is 1");
    });

    it('should show that the user has increased the count', () => {
      // Assert
      const textElement: HTMLElement =  screen.getByText("User has increased the count");
      expect(textElement).toBeInTheDocument();
    });

    it('should set the updated count to MagicNumberTransformer', () => {
      expect(MagicNumberTransformer).toHaveBeenCalledWith({count: 1}, undefined)
    });
  })

});