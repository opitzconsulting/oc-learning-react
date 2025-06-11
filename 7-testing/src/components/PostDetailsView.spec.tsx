import {describe, expect} from "vitest";
import {render, waitFor} from "@testing-library/react";
import PostDetailView from "./PostDetailView.tsx";
import {JSONPlaceholderPost} from "../services/PlaceholderFetch.ts";
import {screen} from "@testing-library/dom";

describe("PostDisplay", () => {
  it('should load the post provided by id-prop', async () => {
    // Arrange
    const postId: number = 1;
    const mockPost: JSONPlaceholderPost = {body: "Das ist der Body"} as JSONPlaceholderPost;
    const mockResponse = {ok: true, json: () => mockPost};
    window.fetch = vi.fn().mockReturnValue(mockResponse);

    // Act
    render(<PostDetailView postId={postId}/>)

    // Assert
    await waitFor(() => expect(screen.getByText(mockPost.body)).toBeInTheDocument());
  });
})