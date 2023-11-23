// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeToggleShowContent = () => {
        onToggleShowContent()
      }

      const onChangeToggleShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeToggleShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="configContainer">
          <h1 className="configHedding">Layout</h1>
          <div className="config-card">
            <div>
              <input
                onChange={onChangeToggleShowContent}
                type="checkbox"
                id="content"
              />
              <label className="label" htmlFor="content">
                Content
              </label>
            </div>
            <div>
              <input
                onChange={onChangeToggleShowLeftNavbar}
                type="checkbox"
                id="left"
              />
              <label className="label" htmlFor="left">
                Left Navbar
              </label>
            </div>
            <div>
              <input
                onChange={onChangeToggleShowRightNavbar}
                type="checkbox"
                id="right"
              />
              <label className="label" htmlFor="right">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
