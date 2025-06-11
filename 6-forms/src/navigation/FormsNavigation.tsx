import { Link } from 'react-router-dom'

function FormsNavigation() {
  function FormLinks() {
    return (
      <>
        <nav className="nav-container">
          <div>
            <Link to="/forms/forms1">Forms with default submit</Link>
          </div>
          <div>
            <Link to="/forms/forms2">Forms with prevent default submit</Link>
          </div>
          <div>
            <Link to="/forms/forms3">Forms with {'{}'} as state</Link>
          </div>
          <div>
            <Link to="/forms/formsWithUseRef">Forms with Ref</Link>
          </div>
          <div>
            <Link to="/forms/formsWithFormData">Forms with FormData</Link>
          </div>
          <div>
            <Link to="/forms/formsWithBlurValidation">
              Forms with Blur Validation
            </Link>
          </div>
          <div>
            <Link to="/forms/formsWithRequiredValidation">
              Forms with Required Validation
            </Link>
          </div>
          <div>
            <Link to="/forms/formsWithCustomInput">
              Form with Custom Input Field
            </Link>
          </div>
          <div>
            <Link to="/forms/formsWithUseInputHook">
              Form with Custom useInput() Hook
            </Link>
          </div>
          <div>
            <Link to="/forms/exercise">
              Exercise
            </Link>
          </div>
        </nav>
      </>
    )
  }

  return (
    <div>
      <h2>Forms</h2>
      <FormLinks />
    </div>
  )
}

export default FormsNavigation
